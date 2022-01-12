import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/Settings/SettingsScreen';

const SettingsStackNavigator = createNativeStackNavigator();

export default () => (
  <SettingsStackNavigator.Navigator>
    <SettingsStackNavigator.Screen component={SettingsScreen} name={'settingsScreen'} />
  </SettingsStackNavigator.Navigator>
);
