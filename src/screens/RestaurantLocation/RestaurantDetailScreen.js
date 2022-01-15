import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Icon, Image, Text} from 'react-native-elements';
import {useNavigation, useRoute} from '@react-navigation/native';
import EmptyCard from '../../components/common/EmptyCard/EmptyCard';
import { COLORS, DetailScreenStyles, SPACING_CONSTANTS } from '../../constants/styleConstants';
import CustomChip from '../../components/common/CustomChip/CustomChip';

/**
 * @function renderContent
 * @param {Object} restaurantLocation
 * @param {Function} callAction
 * @returns {JSX.Element}
 * @description Renders screen content
 */
const renderContent = ({restaurantLocation, callAction}) => {

  if (!restaurantLocation) {
    return (
      <EmptyCard
        title={'Restaurant Location Not Found'}
        details={'Looks like we misplaced the restaurant you are looking for. Sorry about that.'}
      />
    );
  }

  const {
    images,
    locationName,
    address,
    openForBusiness
  } = restaurantLocation;
  let mainImage;
  let addressString = '';
  if (Array.isArray(images) && images.length) {
    mainImage = images[0]['url'];
  }

  if (address.address1) {
    addressString += address.address1;
  }

  return (
    <View style={DetailScreenStyles.container}>
      <ScrollView contentContainerStyle={DetailScreenStyles.scrollView}>
        <Image source={{uri: mainImage}} style={DetailScreenStyles.mainImage} />
        <View style={DetailScreenStyles.contentContainer}>
          <Text style={DetailScreenStyles.title}>{locationName}</Text>
          <Text style={DetailScreenStyles.details}>{addressString}</Text>
          <CustomChip
            containerOverride={{marginVertical: SPACING_CONSTANTS.MEDIUM}}
            iconElement={<Icon
              color={openForBusiness ? COLORS.GREENISH : COLORS.REDISH}
              name={'circle'}
              size={16}
              type={'material-community'}
            />}
            title={openForBusiness ? 'Open for Business' : 'Closed'}
          />
        </View>
      </ScrollView>
    </View>
  );
};


/**
 * @function RestaurantDetailScreen
 * @returns {JSX.Element}
 * @description Renders restaurant detail screen
 */
const RestaurantDetailScreen = () => {

  const [restaurantLocation, setRestaurantLocation] = useState();
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const {params: {restaurant: _restaurant}} = route;
    if (_restaurant) {
      setRestaurantLocation(_restaurant);
      navigation.setOptions({
        title: _restaurant['locationName']
      });
    }
  }, []);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{flex: 1}}>
      {renderContent({restaurantLocation})}
    </SafeAreaView>
  );
};

export default RestaurantDetailScreen;