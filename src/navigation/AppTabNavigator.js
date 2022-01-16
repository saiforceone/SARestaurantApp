import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import MenuStackNavigator from './MenuStackNavigator';
import OrderStackNavigator from './OrderStackNavigator';
import RestaurantStackNavigator from './RestaurantStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import { COLORS } from '../constants/styleConstants';

const AppTabNavigator = createBottomTabNavigator();

export default () => (
  <AppTabNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AppTabNavigator.Screen
      component={MenuStackNavigator}
      name={'menuStack'} 
      options={{
        tabBarLabel: 'Menu',
        tabBarIcon: ({color}) => (
          <Icon
            color={color}
            name={'food-croissant'}
            type={'material-community'}
          />
        ),
      }}
    />
    <AppTabNavigator.Screen
      component={OrderStackNavigator}
      name={'orderStack'}
      options={{
        tabBarLabel: 'Orders',
        tabBarIcon: ({color}) => (
          <Icon
            color={color}
            name={'shopping'}
            type={'material-community'}
          />
        ),
      }}
    />
    <AppTabNavigator.Screen
      component={RestaurantStackNavigator}
      name={'restaurantStack'}
      options={{
        tabBarLabel: 'Locations',
        tabBarIcon: ({color}) => (
          <Icon
            color={color}
            name={'map-marker'}
            type={'material-community'}
          />
        ),
      }}
    />
    <AppTabNavigator.Screen
      component={SettingsStackNavigator}
      name={'settingsStack'}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({color}) => (
          <Icon
            color={color}
            name={'cogs'}
            type={'material-community'}
          />
        )
      }}
    />
  </AppTabNavigator.Navigator>
);
