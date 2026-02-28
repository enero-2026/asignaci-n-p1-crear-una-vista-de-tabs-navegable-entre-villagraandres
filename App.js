import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, LinkingOptions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Dimensions } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get('window').width;

// Configurar deep linking para que lea los parámetros de la URL
const linking: LinkingOptions = {
  prefixes: ['http://localhost:8082', 'exp://localhost:8082'],
  config: {
    screens: {
      Home: 'home',
      Profile: 'profile',
      Settings: 'settings',
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking} fallback={<></>}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.tabBarItem,
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: true,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          initialParams={{ name: 'Inicio' }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          initialParams={{ name: 'Perfil' }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          initialParams={{ name: 'Configuración' }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tabBarItem: {
    width: screenWidth / 3,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});
