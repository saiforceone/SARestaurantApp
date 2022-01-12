import React from 'react';
import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';

/**
 * @function RestaurantDetailScreen
 * @returns {JSX.Element}
 * @description Renders restaurant detail screen
 */
const RestaurantDetailScreen = () => {

  const route = useRoute();
  // todo: extract restaurant object from params
  console.log('restaurantDetailScreen params: ', route.params.restaurant);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Restaurant Detail Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantDetailScreen;