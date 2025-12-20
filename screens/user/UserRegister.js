import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { supabase } from '../../config/supabase';

export default function UserRegister({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    // Validation
    if (!fullName.trim()) {
      Alert.alert('Error', 'Please enter your full name');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      console.log('=== STARTING REGISTRATION ===');
      console.log('Email:', email.trim());
      console.log('Full Name:', fullName.trim());
      console.log('ID Number:', idNumber.trim());
      
      // 1. Sign up the user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
        options: {
          data: {
            full_name: fullName.trim(),
            id_number: idNumber.trim()
          }
        }
      });

      console.log('=== AUTH SIGNUP RESULT ===');
      console.log('Success:', !!authData.user);
      console.log('User ID:', authData.user?.id);
      console.log('Error:', authError);

      if (authError) throw authError;

      // If we got here, the user was created in Supabase!
      if (authData.user) {
        console.log('✅ User created successfully in Supabase!');
        console.log('User ID:', authData.user.id);
        console.log('Email:', authData.user.email);

        // 2. Try to create user profile (optional, can fail)
        try {
          const { error: profileError } = await supabase
            .from('user_profiles')
            .insert([{
              id: authData.user.id,
              full_name: fullName.trim(),
              id_number: idNumber.trim(),
              role: 'user'
            }]);

          if (profileError) {
            console.log('⚠️ Profile creation failed (but user exists):', profileError.message);
          } else {
            console.log('✅ Profile created successfully!');
          }
        } catch (profileErr) {
          console.log('⚠️ Profile creation error (but user exists):', profileErr);
        }
      }

      setLoading(false);

      Alert.alert(
        'Success! 🎉',
        `Account created!\nEmail: ${email.trim()}\nYou can now login.`,
        [
          {
            text: 'Go to Login',
            onPress: () => navigation.navigate('UserLogin')
          }
        ]
      );

    } catch (error) {
      setLoading(false);
      console.log('=== REGISTRATION ERROR ===');
      console.log('Error message:', error.message);
      console.log('Full error:', JSON.stringify(error, null, 2));
      Alert.alert('Registration Failed', error.message || 'Unknown error occurred');
    }
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
            placeholder="Enter your Full Name if Guest/Alumni"
            value={fullName}
            onChangeText={setFullName}
            editable={!loading}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>ID NUMBER</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter ID no. if Student/Staff/Faculty"
            value={idNumber}
            onChangeText={setIdNumber}
            editable={!loading}
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
            editable={!loading}
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
            editable={!loading}
          />
        </View>
        
        <TouchableOpacity 
          onPress={handleRegister}
          disabled={loading}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#8a2d7fbd', '#8750abc2', '#8372d8b8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            {loading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.buttonText}>Register</Text>
            )}
          </LinearGradient>
        </TouchableOpacity>
        
        <View style={styles.links}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('UserLogin')}
            disabled={loading}
          >
            <Text style={styles.linkText}>
              Already have an account? <Text style={styles.linkBold}>Login</Text>
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => navigation.navigate('AdminLogin')}
            disabled={loading}
          >
            <Text style={styles.linkText}>Admin?</Text>
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
    color: '#8650abff',
    fontSize: 14,
    fontWeight: '500',
  },
  linkBold: {
    fontWeight: 'bold',
  },
});