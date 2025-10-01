import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox} />
      <Text style={styles.title}>QuickQ</Text>
      <Text style={styles.subtitle}>Skip the line, save your time!</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('UserLogin')}
        >
          <Text style={styles.buttonText}>Login as User</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => navigation.navigate('AdminLogin')}
        >
          <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Login as Admin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 32,
  },
  logoBox: {
    width: 96,
    height: 96,
    backgroundColor: '#9333ea',
    borderRadius: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 48,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  button: {
    backgroundColor: '#9333ea',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 24,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#9333ea',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSecondary: {
    color: '#9333ea',
  },
});