import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
const navigation = useNavigation();

return (
<View style={styles.headerContainer}>
{/* App title area */}
<View style={styles.topHeader}>
<Text style={styles.title}>TeamUp</Text>
<Text style={styles.subtitle}>University Portal</Text>
</View>

  {/* Navigation bar area */}
  <View style={styles.navbar}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.navItem}>Home</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Text style={styles.navItem}>Profile</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('AdminDashboard')}>
      <Text style={styles.navItem}>Dashboard</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.navItem}>Logout</Text>
    </TouchableOpacity>
  </View>
</View>


);
}

const styles = StyleSheet.create({
headerContainer: {
backgroundColor: '#6C63FF',
paddingTop: 50,
paddingBottom: 20,
paddingHorizontal: 16,
elevation: 6,
shadowColor: '#000',
shadowOpacity: 0.3,
shadowOffset: { width: 0, height: 2 },
shadowRadius: 3,
},
topHeader: {
alignItems: 'center',
marginBottom: 10,
},
title: {
fontSize: 26,
fontWeight: 'bold',
color: '#fff',
},
subtitle: {
fontSize: 14,
color: '#E0E0E0',
},
navbar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#fff',
paddingTop: 10,
},
navItem: {
color: '#fff',
fontWeight: '600',
fontSize: 15,
},
});