import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from '../screens/Menu/MenuScreen';
import MenuItemDetailScreen from '../screens/Menu/MenuItemDetailScreen';

const MenuStackNavigator = createNativeStackNavigator();

export default () => {
  return (
    <MenuStackNavigator.Navigator>
      <MenuStackNavigator.Screen component={MenuScreen} name={'menuScreen'} />
      <MenuStackNavigator.Screen component={MenuItemDetailScreen} name={'menuItemDetailScreen'} />
    </MenuStackNavigator.Navigator>
  );
};
