import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import { COLORS } from '../../constants/styleConstants';
import FormattingUtils from '../../utils/FormattingUtils';
import OrderDetailItemStyles from './OrderDetailItem.styles';

/**
 * @function OrderDetailItem
 * @param {Object} props
 * @returns {JSX.Element}
 * @description Renders an item that belongs to an order
 */
const OrderDetailItem = props => {
  const {itemCost, itemName} = props;
  return (
    <View style={OrderDetailItemStyles.container}>
      <Icon
        color={COLORS.DARKISH}
        name='food'
        type='material-community'
      />
      <View style={OrderDetailItemStyles.contentContainer}>
        <Text style={OrderDetailItemStyles.itemName}>{itemName}</Text>
        <Text style={OrderDetailItemStyles.itemCost}>{FormattingUtils.formatAsCurrency({value: itemCost})}</Text>
      </View>
    </View>
  );
};

OrderDetailItem.propTypes = {
  itemCost: PropTypes.number,
  itemName: PropTypes.string,
}

export default OrderDetailItem;