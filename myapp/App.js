import { View, Text, ScrollView ,StyleSheet } from 'react-native'
import React from 'react'

import Signup from "./src/screen/Signup/Signup"
import Login from "./src/screen/Login/Login"
import Profile from "./src/screen/Profile/Profile"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabsNAvigation from './src/screen/mainappRoutes/TabsNAvigation'


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    
   
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabsNAvigation" component={TabsNAvigation}  />
        <Stack.Screen name="Signup" component={Signup}  />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  

  )
}   

