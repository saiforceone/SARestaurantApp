import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RestaurantLocationScreen from '../screens/RestaurantLocation/RestaurantLocationsScreen';
import RestaurantDetailScreen from '../screens/RestaurantLocation/RestaurantDetailScreen';
import { CommonNavStyles } from '../constants/styleConstants';

const RestaurantStackNavigator = createNativeStackNavigator();

export default () => (
  <RestaurantStackNavigator.Navigator
    screenOptions={{
      ...CommonNavStyles,
    }}
  >
    <RestaurantStackNavigator.Screen
      component={RestaurantLocationScreen}
      name={'restaurantLocationScreen'}
      options={{title: 'Restaurant Locations'}}
    />
    <RestaurantStackNavigator.Screen
      component={RestaurantDetailScreen}
      name={'restaurantDetailScreen'}
    />
  </RestaurantStackNavigator.Navigator>
)
