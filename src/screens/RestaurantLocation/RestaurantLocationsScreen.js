import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchRestaurantLocations } from '../../store/actions/restaurantLocationActions';

/**
 * @function RestaurantLocationScreen
 * @param {Object} props 
 * @returns {JSX.Element}
 * @description Renders a restaurant location screen
 */
const RestaurantLocationScreen = props => {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const restaurantStore = useSelector(state => state['restaurantLocations']);

  useEffect(() => {
    dispatch(fetchRestaurantLocations());
  }, []);

  const onNavToDetails = ({item}) => {
    navigation.navigate('restaurantDetailScreen', {
      restaurant: item,
    });
  };

  const keyExtractor = (item, id) => item['_id'];

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => onNavToDetails({item})}>
      <View style={{backgroundColor: '#fff', marginBottom: 10, padding: 10}}>
        <Text>{item['locationName']}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Restaurant Location Screen</Text>
        <FlatList
          data={restaurantStore.items}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantLocationScreen;