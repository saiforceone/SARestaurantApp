import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import AboutScreen from '../screens/Settings/AboutScreen';
import { CommonNavStyles } from '../constants/styleConstants';

const SettingsStackNavigator = createNativeStackNavigator();

export default () => (
  <SettingsStackNavigator.Navigator
    screenOptions={{
      ...CommonNavStyles
    }}
  >
    <SettingsStackNavigator.Screen
      component={SettingsScreen}
      name={'settingsScreen'}
      options={{
        title: 'Settings'
      }}
    />
    <SettingsStackNavigator.Screen
      component={AboutScreen}
      name={'aboutScreen'}
      options={{
        title: 'About'
      }}
    />
  </SettingsStackNavigator.Navigator>
);
