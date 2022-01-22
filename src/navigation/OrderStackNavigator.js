import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrderListScreen from '../screens/Orders/OrderListScreen';
import OrderDetailScreen from '../screens/Orders/OrderDetailScreen';
import { CommonNavStyles } from '../constants/styleConstants';

const OrderStackNavigator = createNativeStackNavigator();

export default () => (
  <OrderStackNavigator.Navigator
    screenOptions={{
      ...CommonNavStyles
    }}
  >
    <OrderStackNavigator.Screen
      component={OrderListScreen}
      name={'orderListScreen'}
      options={{title: 'Orders'}}
    />
    <OrderStackNavigator.Screen
      component={OrderDetailScreen}
      name={'orderDetailScreen'}
      options={{title: 'Order Details'}}
    />
  </OrderStackNavigator.Navigator>
);