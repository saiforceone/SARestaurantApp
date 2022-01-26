import ActionCreatorUtils from '../utils/ActionCreatorUtils';
import { PLACE_ORDER_ACTIONS as POA } from '../constants';
import StorageUtils from '../../utils/StorageUtils';
import { API_ENDPOINTS, STORAGE_CONSTANTS } from '../../constants';
import axios from 'axios';

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
 * 
 {
    "orderData": {
        "relatedLocation": "61d919c5ec0036616d89976a",
        "orderTotal": 4.50,
        "orderItems": [
            {
                "itemRef": "61d79d679705008ed2400031",
                "itemCost":4.05,
                "itemName": "Pancakes"
            }
        ],
        "deliveryNotes": "orem ipsum dolor sit amet, consectetur adipiscing elit, se",
        "orderNotes": "orem ipsum dolor sit amet, consectetur adipiscing elit, se",
        "orderStatus": "received"
    }
}
 */

/**
 * @function placeOrderAction
 * @param {String} deliveryNotes - Notes for order delivery or pickup
 * @param {Array} orderItems - The items the user is attempting to order
 * @param {String} orderNotes - Notes about this order like allergies, etc
 * @param {String} relatedLocation - specifies the restaurant location the order should be placed at
 * @param {Function} onOrderSuccess - action to be triggered on a successful order
 * @returns {Function}
 * @description Action to place an order via an API call
 */
export const placeOrderAction = ({
  deliveryNotes = '',
  orderItems,
  orderNotes = '',
  relatedLocation,
  onOrderSuccess,
}) => {
  return async dispatch => {
    try {
      dispatch(ActionCreatorUtils.buildAction(POA.SET_ERROR, ''));
      dispatch(ActionCreatorUtils.buildAction(POA.SET_ORDER_SUCCESS, false));

      const tokenData = await StorageUtils.getItemSecure({
        key: STORAGE_CONSTANTS.AUTH_TOKEN,
      });

      if (!tokenData.data) {
        return dispatch(ActionCreatorUtils.buildAction(
          POA.SET_ERROR,
          'Session has expired',
        ));
      }

      const url = `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.ORDERS}`;

      const headers = {
        authorization: `${tokenData.data}`,
      };
      
      if (!Array.isArray(orderItems) || !orderItems.length) {
        return dispatch(ActionCreatorUtils.buildAction(
          POA.SET_ERROR,
          'Invalid order items',
        ));
      }

      const _orderItems = orderItems.map(item => ({
        itemRef: item._id,
      }));

      const payload = {
        orderData: {
          deliveryNotes,
          orderItems: _orderItems,
          orderNotes,
          relatedLocation,
        }
      };

      dispatch(ActionCreatorUtils.buildAction(POA.SET_REQ_IN_PROGRESS, true));

      const {data: responseData} = await axios.post(url, payload, {headers});
      
      dispatch(ActionCreatorUtils.buildAction(POA.SET_REQ_IN_PROGRESS, false));

      if (!responseData.success) {
        return dispatch(ActionCreatorUtils.buildAction(
          POA.SET_ERROR,
          'An error occurred while attempting to place your order.'
        ));
      }
      
      dispatch(ActionCreatorUtils.buildAction(
        POA.SET_ORDER_SUCCESS,
        true,
      ));
      dispatch(ActionCreatorUtils.buildAction(
        POA.REMOVE_ALL_ORDER_ITEMS,
      ));

      if (typeof onOrderSuccess === 'function') {
        onOrderSuccess();
      }

    } catch (e) {
      console.log('placeOrderActions.placeOrder error: ', e.toString());
      dispatch(ActionCreatorUtils.buildAction(POA.SET_ERROR, e.toString()));
      dispatch(ActionCreatorUtils.buildAction(POA.SET_REQ_IN_PROGRESS, false));
    }
  };
};
