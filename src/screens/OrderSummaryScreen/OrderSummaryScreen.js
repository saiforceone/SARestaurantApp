import React, {useCallback, useEffect, useState} from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Button, Input, Text} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS, DetailScreenStyles, SAFE_AREA_EDGES, SPACING_CONSTANTS } from '../../constants/styleConstants';
import DetailRow from '../../components/common/DetailRow/DetailRow';
import FormattingUtils from '../../utils/FormattingUtils';
import OrderDetailItem from '../../components/OrderDetail/OrderDetailItem';
import OrderSummaryScreenStyles from './OrderSummaryScreen.styles';
import { placeOrderAction } from '../../store/actions/placeOrderActions';
import EmptyCard from '../../components/common/EmptyCard/EmptyCard';
import {removeItemFromOrder} from '../../store/actions/placeOrderActions';
import {fetchRestaurantLocations} from '../../store/actions/restaurantLocationActions';
import ProgressOverlay from '../../components/common/ProgressOverlay/ProgressOverlay';

/**
 * @function renderContent
 * @param {Array} orderItems
 * @returns {JSX.Element}
 * @description Renders screen content :)
 */
const renderContent = ({
  orderItems,
  orderTotal,
  orderInProgress,
  deleteItemPrompt,
  placeOrderAction,
  restaurantLocations,
  setRestaurantLocations,
  onSelectRestaurantLocation,
  onUpdateOrderInfo,
  orderInfo
}) => {
  const [locationPickerOpen, setLocationPickerOpen] = useState(false);
  const [value, setValue] = useState();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={100}
      style={{flex: 1}}
    >
      <View style={DetailScreenStyles.container}>
        <View style={DetailScreenStyles.contentContainer}>
          <Text style={OrderSummaryScreenStyles.sectionText}>Choose Pickup Location</Text>
          <DropDownPicker
            containerStyle={{marginBottom: SPACING_CONSTANTS.SMALL}}
            onChangeValue={v => {
              onSelectRestaurantLocation({location: v})
            }}
            open={locationPickerOpen}
            value={value}
            items={restaurantLocations}
            setOpen={setLocationPickerOpen}
            setValue={setValue}
            setItems={setRestaurantLocations}
          />
        </View>
        <ScrollView contentContainerStyle={[DetailScreenStyles.scrollView, {paddingHorizontal: SPACING_CONSTANTS.MEDIUM}]}>
          <DetailRow
            labelText='Number of Items'
            valueText={`${orderItems.length}`}
          />
          <DetailRow
            labelText='Order Total'
            valueText={`${FormattingUtils.formatAsCurrency({value: orderTotal})}`}
          />
          <Input
            placeholder='Order Notes (optional)'
            onChangeText={value => onUpdateOrderInfo({key: 'orderNotes', value})}
            value={orderInfo.orderNotes}
          />
          <Input
            placeholder='Delivery Notes (optional)'
            onChangeText={value => onUpdateOrderInfo({key: 'deliveryNotes', value})}
            value={orderInfo.deliveryNotes}
          />
          <Text style={OrderSummaryScreenStyles.sectionText}>Items In Your Order</Text>
          {orderItems.map((item, itemIndex) => <OrderDetailItem
            key={`${item._id}-${itemIndex}`}
            deleteAction={() => deleteItemPrompt({itemIndex, itemName: item.itemName})}
            itemCost={item.baseCost}
            itemName={item.itemName}
          />)}
          {!orderItems.length && (<EmptyCard title='No items in this order' details='You may add an item from the menu.' />)}
        </ScrollView>
        <View style={DetailScreenStyles.buttonContainer}>
          <Button
            buttonStyle={{backgroundColor: COLORS.GREENISH}}
            containerStyle={{marginBottom: SPACING_CONSTANTS.LARGE}}
            disabled={orderInProgress}
            icon={{
              color: COLORS.JUSTWHITE,
              name: 'credit-card-check',
              type: 'material-community'
            }}
            onPress={placeOrderAction}
            title='Place Order Now'
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

/**
 * @function OrderSummaryScreen
 * @returns {JSX.Element}
 * @description Renders the order summary screen with the option to remove items and / or place the order
 */
const OrderSummaryScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const placeOrderStore = useSelector(state => state.placeOrder);
  const restaurantLocationStore = useSelector(state => state.restaurantLocations);
  const [restaurantLocations, setRestaurantLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState();
  const [deliveryNotes, setDeliveryNotes] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => undefined,
    });
    dispatch(fetchRestaurantLocations());
  }, []);

  useEffect(() => {
    const locations = restaurantLocationStore.items.map(loc => ({
      label: loc.locationName,
      value: loc._id,
    }));

    setRestaurantLocations(locations);
  }, []);

  const onOrderSuccess = () => {
    if (placeOrderStore.orderSuccess) {
      Alert.alert(
        'Order Placed Successfully',
        'Your order was placed successfully. Enjoy',
        [
          {
            text: 'Ok'
          }
        ]
      );
      navigation.pop();
    }
  };

  /**
   * @function onUpdateOrderInfo
   * @description Update either the order notes or delivery notes
   * @returns {void}
   */
  const onUpdateOrderInfo = useCallback(({key, value})=> {
    switch (key) {
      case 'orderNotes':
        return setOrderNotes(value);
      case 'deliveryNotes':
        return setDeliveryNotes(value);
      default:
        break;
    }
  }, [deliveryNotes, orderNotes]);

  const onSelectRestaurantLocation = useCallback(({location}) => {
    if (location) {
      setSelectedLocation(location);
    }
  }, [selectedLocation]);

  /**
   * @function placeOrder
   * @description executes the action to place
   */
  const placeOrder = useCallback(() => {
    const alertTitle = 'Unable to Place Order';
    if (!selectedLocation) {
      return Alert.alert(
        alertTitle,
        'Please select a restaurant location before trying to place your order',
        [
          {
            text: 'Ok',
          },
        ],
      )
    }
    if (!placeOrderStore.orderItems.length) {
      return Alert.alert(
        alertTitle,
        'There are currently no items in your order. You may add some from the menu.',
        [
          {
            text: 'Ok'
          }
        ]
      );
    }

    dispatch(placeOrderAction({
      deliveryNotes,
      orderItems: placeOrderStore.orderItems,
      orderNotes,
      relatedLocation: selectedLocation,
      onOrderSuccess,
    }));
  }, [placeOrderStore, selectedLocation]);

  const deleteItem = useCallback(({itemIndex}) => {
    dispatch(removeItemFromOrder({itemIndex}))
  }, [placeOrderStore]);

  /**
   * @function deleteItemPrompt
   * @param {Number} itemIndex - the item's index to be deleted
   * @param {String} itemName - the name of the item being removed
   * @description Prompts the user to confirm deleting the selected item
   */
  const deleteItemPrompt = useCallback(({itemIndex, itemName}) => {
    return Alert.alert(
      `Remove Item From Order?`,
      `You are about to remove: ${itemName} from you order. Would you like to continue?`,
      [
        {
          style: 'cancel',
          text: 'No'
        },
        {
          onPress: () => deleteItem({itemIndex}),
          style: 'destructive',
          text: 'Yes',
        }
      ]
    )
  }, [placeOrderStore]);

  return (
    <SafeAreaView edges={SAFE_AREA_EDGES} style={DetailScreenStyles.container}>
      {renderContent({
        deleteItemPrompt,
        orderItems: placeOrderStore.orderItems,
        orderInProgress: placeOrderStore.requestInProgress,
        orderTotal: placeOrderStore.orderTotal,
        placeOrderAction: placeOrder,
        restaurantLocations,
        setRestaurantLocations,
        onSelectRestaurantLocation,
        onUpdateOrderInfo,
        orderInfo: {
          orderNotes,
          deliveryNotes,
        }
        })
      }
      <ProgressOverlay
        details='Your order is being placed.'
        title='Please wait...'
        visible={placeOrderStore.requestInProgress}
      />
    </SafeAreaView>
  );
};

export default OrderSummaryScreen;
