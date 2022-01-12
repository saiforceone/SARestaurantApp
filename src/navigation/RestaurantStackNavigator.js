import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RestaurantLocationScreen from '../screens/RestaurantLocation/RestaurantLocationsScreen';
import RestaurantDetailScreen from '../screens/RestaurantLocation/RestaurantDetailScreen';

const RestaurantStackNavigator = createNativeStackNavigator();

export default () => (
  <RestaurantStackNavigator.Navigator>
    <RestaurantStackNavigator.Screen component={RestaurantLocationScreen} name={'restaurantLocationScreen'} />
    <RestaurantStackNavigator.Screen component={RestaurantDetailScreen} name={'restaurantDetailScreen'} />
  </RestaurantStackNavigator.Navigator>
)
