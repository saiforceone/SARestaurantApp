import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchRestaurantLocations } from '../../store/actions/restaurantLocationActions';
import ListItemCard from '../../components/common/ListItemCard/ListItemCard';
import ListHeader from '../../components/common/ListHeader/ListHeader';
import CustomChip from '../../components/common/CustomChip/CustomChip';
import { Icon } from 'react-native-elements';
import { COLORS } from '../../constants/styleConstants';

/**
 * @function RestaurantLocationScreen
 * @param {Object} props 
 * @returns {JSX.Element}
 * @description Renders a restaurant location screen
 */
const RestaurantLocationScreen = props => {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const restaurantStore = useSelector(state => state.restaurantLocations);

  useEffect(() => {
    dispatch(fetchRestaurantLocations());
  }, []);

  const onNavToDetails = ({item}) => {
    navigation.navigate('restaurantDetailScreen', {
      restaurant: item,
    });
  };

  const keyExtractor = (item, id) => item['_id'];

  const renderItem = ({item}) => {

    const {images} = item;
    let mainImage;
    if (Array.isArray(images) && images.length) {
      mainImage = images[0]['url'];
    }
    return (
      <ListItemCard
        action={() => onNavToDetails({item})}
        imageUrl={mainImage}
        title={item['locationName']}
        details={`${item['address']['address1']}`}
        extraContent={
          <CustomChip
            iconElement={<Icon
              color={item['openForBusiness'] ? COLORS.GREENISH : COLORS.REDISH}
              name={'circle'}
              size={10}
              type={'material-community'}
            />}
            title={item['openForBusiness'] ? 'Open' : 'Closed'}
          />
        }
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ backgroundColor: '#FFF', flex: 1}}>
        <ListHeader title={restaurantStore.requestInProgress ? 'Finding restaurants...' : `Found ${ restaurantStore.items ? restaurantStore.items.length : 0} location(s)`} isLoading={restaurantStore.requestInProgress} />
        <FlatList
          data={restaurantStore.items}
          keyExtractor={keyExtractor}
          onRefresh={() => dispatch(fetchRestaurantLocations())}
          refreshing={restaurantStore.requestInProgress}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantLocationScreen;
