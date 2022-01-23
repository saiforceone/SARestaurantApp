import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import {TouchableOpacity, View} from 'react-native';
import {Badge, Icon} from 'react-native-elements';
import { COLORS } from '../../../constants/styleConstants';
import ShoppingCartStyles from './ShoppingCart.styles';

/**
 * @function ShoppingCart
 * @param {Object} props 
 * @returns {JSX.Element}
 * @description Displays the current shopping cart
 */
const ShoppingCart = props => {
  const {action} = props;
  const placeOrderStore = useSelector(state => state.placeOrder);

  return (
    <TouchableOpacity onPress={action}>
      <View style={ShoppingCartStyles.container}>
        <Badge
          containerStyle={ShoppingCartStyles.icon}
          value={`${placeOrderStore.orderItems.length}`}
        />
        <Icon
          color={COLORS.JUSTWHITE}
          name='basket'
          size={32}
          type='material-community'
        />
      </View>
    </TouchableOpacity>
  );
};

ShoppingCart.propTypes = {
  action: PropTypes.func.isRequired,
};

export default ShoppingCart;
