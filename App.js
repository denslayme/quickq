import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import HomePage from './screens/HomePage';
import UserLogin from './screens/user/UserLogin';
import UserRegister from './screens/user/UserRegister';
import AdminLogin from './screens/admin/AdminLogin';
import AdminRegister from './screens/admin/AdminRegister';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="UserRegister" component={UserRegister} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="AdminRegister" component={AdminRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}