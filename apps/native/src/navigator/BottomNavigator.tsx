import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
import Ionicons from "react-native-vector-icons/Ionicons"
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../theme/color';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Home from '../screens';
import Automation from '../screens/Automation';
import Setting from '../screens/Setting';
import Report from '../screens/Report';


const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: { position: 'absolute', height: 70,  backgroundColor: Colors.secondary,  },
        tabBarShowLabel: false,
      }}>

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.primary : Colors.disable, }}>Home</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/s37.png')} resizeMode='stretch'
              style={{ height: 26, width: 26, tintColor: focused ? Colors.primary : Colors.active }} />
          },
          headerShown: false,
        }}
      />

      <Tab.Screen name="Automation" component={Automation}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.primary : Colors.disable, }}>Automation</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/s18.png') } resizeMode='stretch'
              style={{ height: 26, width: 26, tintColor: focused ? Colors.primary : Colors.active }} />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="Report" component={Report}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.primary : Colors.disable, }}>Report</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/s45.png') } resizeMode='stretch'
              style={{ height: 26, width: 26 , tintColor: focused ? Colors.primary : Colors.active}} />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="Setting" component={Setting}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.primary : Colors.disable, }}>Setting</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/s3.png')} resizeMode='stretch'
              style={{ height: 26, width: 26, tintColor: focused ? Colors.primary : Colors.active }} />
          },
          headerShown: false,
        }} />


    </Tab.Navigator>
  );
}


