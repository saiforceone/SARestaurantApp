import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../../store/actions/menuItemActions';

const MenuScreen = props => {

  const dispatch = useDispatch();
  const menuItemStore = useSelector(state => state.menuItems);

  console.log('menuscreen menuitemstore: ', menuItemStore);

  useEffect(() => {
    dispatch(fetchMenuItems({filter: {}}));
  }, []);

  const keyExtractor = (item, id) => item['_id'];

  const renderItem = ({item}) => (<View style={{padding: 5, marginBottom: 5, backgroundColor: '#f4f4f4'}}>
    <Image source={{uri: item['mainImage']}} style={{height: 100, width: '100%'}} />
    <Text>{item['itemName']}</Text>
    <Text>{item['description']}</Text>
    <Text>Cost: ${item['baseCost']}</Text>
  </View>)

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