import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { fetchMenuItems } from '../../store/actions/menuItemActions';
import ListItemCard from '../../components/common/ListItemCard/ListItemCard';
import { FONT_FAMILIES, FONT_SIZES, FONT_WEIGHTS } from '../../constants/styleConstants';
import ListHeader from '../../components/common/ListHeader/ListHeader';
import FormattingUtils from '../../utils/FormattingUtils';

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
      key={`meneu-item-${item['_id']}`}
      action={() => onNavigateToDetails({item})}
      title={item['itemName']}
      details={item['description']}
      imageUrl={item['mainImage']}
      extraContent={<Text style={{fontFamily: FONT_FAMILIES.Cairo_SemiBold, fontSize: FONT_SIZES.MEDIUM, fontWeight: FONT_WEIGHTS.HEAVY, lineHeight: FONT_SIZES.MEDIUM * 1.25}}>
        {FormattingUtils.formatAsCurrency({value: item['baseCost']})}
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