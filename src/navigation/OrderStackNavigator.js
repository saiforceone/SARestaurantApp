import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrderListScreen from '../screens/Orders/OrderListScreen';

const OrderStackNavigator = createNativeStackNavigator();

export default () => (
  <OrderStackNavigator.Navigator>
    <OrderStackNavigator.Screen component={OrderListScreen} name={'orderListScreen'} />
  </OrderStackNavigator.Navigator>
);