import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MenuStackNavigator from './MenuStackNavigator';
import OrderStackNavigator from './OrderStackNavigator';
import RestaurantStackNavigator from './RestaurantStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';

const AppTabNavigator = createBottomTabNavigator();

export default () => (
  <AppTabNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AppTabNavigator.Screen component={MenuStackNavigator} name={'menuStack'} />
    <AppTabNavigator.Screen component={OrderStackNavigator} name={'orderStack'} />
    <AppTabNavigator.Screen component={RestaurantStackNavigator} name={'restaurantStack'} />
    <AppTabNavigator.Screen component={SettingsStackNavigator} name={'settingsStack'} />
  </AppTabNavigator.Navigator>
);
