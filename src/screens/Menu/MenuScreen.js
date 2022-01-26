import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { fetchMenuItems } from '../../store/actions/menuItemActions';
import ListItemCard from '../../components/common/ListItemCard/ListItemCard';
import { FONT_FAMILIES, FONT_SIZES, FONT_WEIGHTS } from '../../constants/styleConstants';
import ListHeader from '../../components/common/ListHeader/ListHeader';
import FormattingUtils from '../../utils/FormattingUtils';
import StorageUtils from '../../utils/StorageUtils';
import { STORAGE_CONSTANTS } from '../../constants';
import ActionCreatorUtils from '../../store/utils/ActionCreatorUtils';
import { APP_ACTIONS } from '../../store/constants';
import { getProfile } from '../../store/actions/appAction';
import { fetchRestaurantLocations } from '../../store/actions/restaurantLocationActions';

/**
 * @function MenuScreen
 * @returns {JSX.Element}
 * @description Renders the menu screen 
 */
const MenuScreen = () => {

  const dispatch = useDispatch();
  const menuItemStore = useSelector(state => state.menuItems);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(fetchMenuItems({filter: {}}));
    dispatch(fetchRestaurantLocations());
  }, []);

  useEffect(() => {
    StorageUtils.getItemSecure({key: STORAGE_CONSTANTS.AUTH_TOKEN}).then(result => {
      if (result.data) {
        dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.SET_AUTH_TOKEN, result.data));
      }
    }).catch(e => {
      console.log("well, this didn't work.");
    })
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