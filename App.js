import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import HomePage
import HomePage from './screens/HomePage';

// Import grouped screens from subfolders
import * as UserScreens from "./screens/user";
import * as AdminScreens from "./screens/admin";

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
        {/* Main entry */}
        <Stack.Screen name="Home" component={HomePage} />

        {/* User screens */}
        <Stack.Screen name="UserLogin" component={UserScreens.UserLogin} />
        <Stack.Screen name="UserRegister" component={UserScreens.UserRegister} />
        <Stack.Screen name="UserDashboard" component={UserScreens.UserDashboard} />
        <Stack.Screen name="NotifPage" component={UserScreens.NotifPage} />
        <Stack.Screen name="OfficeClicked" component={UserScreens.OfficeClicked}/>
        <Stack.Screen name="TicketCreated" component={UserScreens.TicketCreated} />
        <Stack.Screen name="TicketInfo" component={UserScreens.TicketInfo} />

        {/* Admin screens */}
        <Stack.Screen name="AdminLogin" component={AdminScreens.AdminLogin} />
        <Stack.Screen name="AdminRegister" component={AdminScreens.AdminRegister} />
        <Stack.Screen name="AdminDashboard" component={AdminScreens.AdminDashboard} />
        <Stack.Screen name="AdminCounter" component={AdminScreens.AdminCounter} />
        <Stack.Screen name="APTicketInfo" component={AdminScreens.APTicketInfo} />
        <Stack.Screen name="ViewTicketServed" component={AdminScreens.ViewTicketServed} />
        <Stack.Screen name="TicketServedInfo" component={AdminScreens.TicketServedInfo} />
        <Stack.Screen name="QRScanInterface" component={AdminScreens.QRScanInterface} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}