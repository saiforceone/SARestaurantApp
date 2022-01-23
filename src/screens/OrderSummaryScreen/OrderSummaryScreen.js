import React, {useCallback, useEffect} from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Button, Text} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, DetailScreenStyles, SAFE_AREA_EDGES, SPACING_CONSTANTS } from '../../constants/styleConstants';
import DetailRow from '../../components/common/DetailRow/DetailRow';
import FormattingUtils from '../../utils/FormattingUtils';
import OrderDetailItem from '../../components/OrderDetail/OrderDetailItem';
import OrderSummaryScreenStyles from './OrderSummaryScreen.styles';
import { placeOrderAction } from '../../store/actions/placeOrderActions';
import EmptyCard from '../../components/common/EmptyCard/EmptyCard';
import {removeItemFromOrder} from '../../store/actions/placeOrderActions';

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
  placeOrderAction
}) => {
  return (
    <View style={DetailScreenStyles.container}>
      <ScrollView contentContainerStyle={[DetailScreenStyles.scrollView, {paddingHorizontal: SPACING_CONSTANTS.MEDIUM}]}>
        <DetailRow
          labelText='Number of Items'
          valueText={`${orderItems.length}`}
        />
        <DetailRow
          labelText='Order Total'
          valueText={`${FormattingUtils.formatAsCurrency({value: orderTotal})}`}
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

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => undefined,
    });
  }, []);

  /**
   * @function placeOrder
   * @description executes the action to place
   */
  const placeOrder = useCallback(() => {
    if (!placeOrderStore.orderItems.length) {
      return Alert.alert(
        'Unable to Place Order',
        'There are currently no items in your order. You may add some from the menu.',
        [
          {
            text: 'Ok'
          }
        ]
      );
    }

    dispatch(placeOrderAction({orderItems: placeOrderStore.orderItem}));
  }, [placeOrderStore]);

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
        })
      }
    </SafeAreaView>
  );
};

export default OrderSummaryScreen;
