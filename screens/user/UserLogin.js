import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function UserLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = () => {
  console.log('USER Login:', { email, password });
  navigation.navigate('UserDashboard');
};

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
  colors={['#8A2D7F', '#8650AB', '#8372D8']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.header}
>
  <Text style={styles.headerTitle}>Welcome Back</Text>
  <Text style={styles.headerSubtitle}>Sign in to continue</Text>
</LinearGradient>    
      
      <View style={styles.form}>
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
          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        
       <TouchableOpacity onPress={handleLogin} activeOpacity={0.8}>
  <LinearGradient
    colors={['#8a2d7fbd', '#8750abc2', '#8372d8b8']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.button}
  >
    <Text style={styles.buttonText}>Login</Text>
  </LinearGradient>
</TouchableOpacity>
        
        <View style={styles.links}>
          <TouchableOpacity onPress={() => navigation.navigate('UserRegister')}>
            <Text style={styles.linkText}>
              Don't have an account? <Text style={styles.linkBold}>Register User</Text>
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('AdminLogin')}>
            <Text style={styles.linkText}>Admin?</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginBottom: 24,
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
    marginTop: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  }, 
  links: {
    alignItems: 'center',
    marginTop: 24,
    gap: 12,
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