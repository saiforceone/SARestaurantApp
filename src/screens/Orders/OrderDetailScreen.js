import React, {useEffect, useState} from 'react';
import { ScrollView, View, Text } from 'react-native';
import {Icon} from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DetailRow from '../../components/common/DetailRow/DetailRow';
import { COLORS, DetailScreenStyles, FONT_SIZES, SAFE_AREA_EDGES, SPACING_CONSTANTS } from '../../constants/styleConstants';
import EmptyCard from '../../components/common/EmptyCard/EmptyCard';
import FormattingUtils from '../../utils/FormattingUtils';
import OrderDetailItem from '../../components/OrderDetail/OrderDetailItem';

/**
 * @function renderOrderItems
 * @param {Object} param0 items
 * @returns {JSX.Element}
 * @description renders the items for this order
 */
const renderOrderItems = ({orderItems}) => {

  if (!Array.isArray(orderItems) || !orderItems.length) {
    return (
      <View>
        <Text>Looks like there are no items for this order.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text 
        style={{
          fontSize: FONT_SIZES.MEDIUM,
          marginBottom: SPACING_CONSTANTS.MEDIUM
        }}
      >
        Items in your Order
      </Text>
      {orderItems.map(item => <OrderDetailItem
        key={item._id}
        itemCost={item.itemCost}
        itemName={item.itemName}
        />
      )}
    </View>
  ); 
};

/**
 * @function renderContent
 * @param {Object} order
 * @returns {JSX.Element}
 * @description Renders screen content
 */
const renderContent = ({order}) => {
  return (
    <ScrollView contentContainerStyle={[DetailScreenStyles.scrollView, {paddingHorizontal: SPACING_CONSTANTS.MEDIUM}]}>
      {!order ? (
        <EmptyCard title='Order not found' />
      ) : (
        <View>
          <DetailRow
            iconElement={
              <Icon
                color={COLORS.DARKISH}
                name='pound'
                type='material-community'
              />
            }
            labelText='Order Number'
            valueText={order._id}
          />
          <DetailRow
            iconElement={
              <Icon
                color={COLORS.DARKISH}
                name='calendar'
                type='material-community'
              />
            }
            labelText='Order Date'
            valueText={FormattingUtils.formatDate({value: order.orderDate})}
          />
          <DetailRow
            iconElement={
              <Icon
                color={COLORS.DARKISH}
                name='information'
                type='material-community'
              />
            }
            labelText='Order Status'
            valueText={order.orderStatus}
          />
          <DetailRow
            iconElement={
              <Icon
                color={COLORS.DARKISH}
                name='attach-money'
              />
            }
            labelText='Order Total'
            valueText={FormattingUtils.formatAsCurrency({value: order.orderTotal})}
          />
          <DetailRow
            iconElement={
              <Icon
                color={COLORS.DARKISH}
                name='note-text'
                type='material-community'
              />
            }
            labelText='Order Notes'
            valueText={order.orderNotes}
          />
          <DetailRow
            iconElement={
              <Icon
                color={COLORS.DARKISH}
                name='note-text'
                type='material-community'
              />
            }
            labelText='Delivery Notes'
            valueText={order.deliveryNotes}
          />
          <DetailRow
            iconElement={
              <Icon
                color={COLORS.DARKISH}
                name={'shopping'}
                type={'material-community'}
              />
            }
            labelText='Number of Items'
            valueText={`${order.orderItems.length}`}
          />
          {renderOrderItems({orderItems: order.orderItems})}
        </View>
      )}
    </ScrollView>
  )
}

/**
 * @function OrderDetailScreen
 * @returns {JSX.Element}
 * @description Renders the order detail screen
 */
const OrderDetailScreen = () => {

  const [order, setOrder] = useState();
  const route = useRoute();

  useEffect(() => {

    const {order: orderData} = route.params;
    setOrder(orderData);
  }, []);

  return (
    <SafeAreaView edges={SAFE_AREA_EDGES} style={[DetailScreenStyles.container, {paddingTop: SPACING_CONSTANTS.MEDIUM}]}>
      {renderContent({order})}
    </SafeAreaView>
  );
};

export default OrderDetailScreen;
