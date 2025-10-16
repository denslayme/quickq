import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function AdminRegister({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [officename, setOffice] = useState('');
  const [email, setEmail] = useState('');
  const [employeeid, setEmployeeID] = useState('');  
  const [password, setPassword] = useState('');
  

  const handleRegister = () => {
    console.log('ADMIN Register:', { fullName, email, employeeid, officename, password });
    navigation.navigate('AdminDashboard');

  };

  return (
    <SafeAreaView style={styles.container}>
       <LinearGradient
  colors={['#8A2D7F', '#8650AB', '#8372D8']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.header}
>
  <Text style={styles.headerTitle}>Create Account</Text>
  <Text style={styles.headerSubtitle}>Join QuickQ today</Text>
</LinearGradient>
      
      <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>FULL NAME</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>EMAIL ADDRESS</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>ID NO.</Text>
          <TextInput
          style={styles.input}
          placeholder="Enter Employee ID No."
          value={employeeid}
          onChangeText={setEmployeeID}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>OFFICE</Text>
          <TextInput
          style={styles.input}
          placeholder="Enter Office Assigned (Full Name)"
          value={officename}
          onChangeText={setOffice}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <LinearGradient
            colors={['#8a2d7fbd', '#8750abc2', '#8372d8b8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Register</Text>
          </LinearGradient>
       </TouchableOpacity>
        
        <View style={styles.links}>
          <TouchableOpacity onPress={() => navigation.navigate('AdminLogin')}>
            <Text style={styles.linkText}>
              Already have an account? <Text style={styles.linkBold}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 32,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e9d5ff',
    textAlign: 'center',
  },
  form: {
    flex: 1,
    padding: 32,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
  },
  button: {
    borderRadius: 26,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 2,
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  links: {
    alignItems: 'center',
    gap: 12,
    marginBottom: 32,
  },
  linkText: {
    color: '#9333ea',
    fontSize: 14,
    fontWeight: '500',
  },
  linkBold: {
    fontWeight: 'bold',
  },
});