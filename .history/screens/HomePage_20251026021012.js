import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';

export default function HomePage({ navigation }) {
  useEffect(() => {
    // Navigate to UserLogin after 1.5 seconds
    const timer = setTimeout(() => {
      navigation.replace('UserLogin');  // Goes straight to UserLogin
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
<LinearGradient
  colors={['#8A2D7F', '#8650AB', '#8372D8']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.logoBox}
/>      <Text style={styles.title}>QuickQ</Text>
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