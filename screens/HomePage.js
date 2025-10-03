import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage({ navigation }) {
  useEffect(() => {
    // Navigate to UserLogin after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('UserLogin');  // ← Goes straight to UserLogin
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoBox} />
      <Text style={styles.title}>QuickQ</Text>
      <Text style={styles.subtitle}>Skip the line, save your time!</Text>
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
  },
});