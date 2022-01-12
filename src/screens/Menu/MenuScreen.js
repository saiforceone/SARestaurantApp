import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { fetchMenuItems } from '../../store/actions/menuItemActions';

const MenuScreen = props => {

  const dispatch = useDispatch();
  const menuItemStore = useSelector(state => state.menuItems);
  const navigation = useNavigation();

  console.log('menuscreen menuitemstore: ', menuItemStore);

  useEffect(() => {
    dispatch(fetchMenuItems({filter: {}}));
  }, []);

  const keyExtractor = (item, id) => item['_id'];

  const onNavigateToDetails = ({item}) => {
    navigation.navigate('menuItemDetailScreen', {
      menuItem: item
    });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => onNavigateToDetails({item})}>
      <View style={{padding: 5, marginBottom: 5, backgroundColor: '#f4f4f4'}}>
        <Image source={{uri: item['mainImage']}} style={{height: 100, width: '100%'}} />
        <Text>{item['itemName']}</Text>
        <Text>{item['description']}</Text>
        <Text>Cost: ${item['baseCost']}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <Text>Menu Screen</Text>
      <FlatList
        data={menuItemStore.items}
        key={keyExtractor}
        onRefresh={() => dispatch(fetchMenuItems({filter: {}}))}
        refreshing={menuItemStore.requestInProgress}
        renderItem={renderItem}
      />
    </View>
  );
}

export default MenuScreen;