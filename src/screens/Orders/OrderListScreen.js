import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

/**
 * @function OrderListScreen
 * @returns {JSX.Element}
 * @description Renders the order list screen
 */
const OrderListScreen = () => {

  const dispatch = useDispatch();
  const orderStore = useSelector(state => state['orders']);

  // todo: implement use effect to fetch orders

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Order Screen - Show list if authenticated</Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderListScreen;