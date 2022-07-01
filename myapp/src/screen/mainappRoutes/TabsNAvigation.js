import { View, Text ,ScrollView} from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../Home/Home"
import About from '../About/About'
import CarScreen from "../carScreen/CarScreen"
import Profile from '../Profile/Profile';




export default function TabsNAvigation() {

  const Tab = createBottomTabNavigator();


  return (
    
         <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Tab.Screen name="About" component={About} options={{headerShown: false}} />
        <Tab.Screen name="CarScreen" component={CarScreen} options={{headerShown: false}} />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
      </Tab.Navigator>
     
    </NavigationContainer>

  )
} 