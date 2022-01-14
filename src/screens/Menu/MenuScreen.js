import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { fetchMenuItems } from '../../store/actions/menuItemActions';
import ListItemCard from '../../components/common/ListItemCard/ListItemCard';
import { FONT_SIZES, FONT_WEIGHTS } from '../../constants/styleConstants';
import ListHeader from '../../components/common/ListHeader/ListHeader';

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
    <ListItemCard
      action={() => onNavigateToDetails({item})}
      title={item['itemName']}
      details={item['description']}
      imageUrl={item['mainImage']}
      extraContent={<Text style={{fontSize: FONT_SIZES.MEDIUM, fontWeight: FONT_WEIGHTS.HEAVY}}>
        {item['baseCost']}
      </Text>}
    />
  );

  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <ListHeader
        isLoading={menuItemStore.requestInProgress}
        title={menuItemStore.requestInProgress ? 
          'Loading menu items...' : 
          `Found ${menuItemStore.items.length} menu item(s)`
        }
      />
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