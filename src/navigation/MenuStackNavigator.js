import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from '../screens/Menu/MenuScreen';
import MenuItemDetailScreen from '../screens/Menu/MenuItemDetailScreen';
import OrderSummaryScreen from '../screens/OrderSummaryScreen/OrderSummaryScreen';
import { CommonNavStyles } from '../constants/styleConstants';
import ShoppingCart from '../components/common/ShoppingCart/ShoppingCart';

const MenuStackNavigator = createNativeStackNavigator();

export default () => {
  return (
    <MenuStackNavigator.Navigator
      screenOptions={({navigation}) => ({
        ...CommonNavStyles,
        headerRight: () => <ShoppingCart action={() => navigation.navigate('menuStackOrderSummary')} />,
      })}
    >
      <MenuStackNavigator.Screen component={MenuScreen} name={'menuScreen'} options={{
        title: 'Menu'
      }} />
      <MenuStackNavigator.Screen component={MenuItemDetailScreen} name={'menuItemDetailScreen'} />
      <MenuStackNavigator.Screen
        component={OrderSummaryScreen}
        name={'menuStackOrderSummary'}
        options={{
          title: 'Order Summary'
        }}
      />
    </MenuStackNavigator.Navigator>
  );
};
