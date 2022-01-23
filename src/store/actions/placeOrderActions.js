import ActionCreatorUtils from '../utils/ActionCreatorUtils';
import { PLACE_ORDER_ACTIONS as POA } from '../constants';

/**
 * @function addItemToOrder
 * @param {Object} orderItem
 * @returns {Object}
 * @description Action to add an order item to the current order
 */
export const addItemToOrder = ({orderItem}) => ActionCreatorUtils.buildAction(POA.ADD_ORDER_ITEM, orderItem);

/**
 * @function removeItemFromOrder
 * @param {Number} itemIndex - specifies the item to be removed
 * @returns {Object}
 * @description Given an item index, removes it from the order
 */
export const removeItemFromOrder = ({itemIndex}) => ActionCreatorUtils.buildAction(POA.REMOVE_ORDER_ITEM, {itemIndex});

/**
 * @function placeOrderAction
 * @param {Array} orderItems
 * @returns {Function}
 * @description Action to place an order via an API call
 */
export const placeOrderAction = ({orderItems}) => {
  return async dispatch => {
    try {
      // todo: fill this out
    } catch (e) {

    }
  };
};
