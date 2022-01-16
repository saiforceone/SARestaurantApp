import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from '../screens/Menu/MenuScreen';
import MenuItemDetailScreen from '../screens/Menu/MenuItemDetailScreen';
import { CommonNavStyles } from '../constants/styleConstants';

const MenuStackNavigator = createNativeStackNavigator();

export default () => {
  return (
    <MenuStackNavigator.Navigator
      screenOptions={{
        ...CommonNavStyles,
      }}
    >
      <MenuStackNavigator.Screen component={MenuScreen} name={'menuScreen'} options={{
        title: 'Menu'
      }} />
      <MenuStackNavigator.Screen component={MenuItemDetailScreen} name={'menuItemDetailScreen'} />
    </MenuStackNavigator.Navigator>
  );
};
