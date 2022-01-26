import { PLACE_ORDER_ACTIONS as POA } from "../constants";

const INITIAL_STATE = {
  lastError: '',
  orderItems: [],
  orderSuccess: false,
  orderTotal: 0,
  requestInProgress: false,
};

/**
 * @function calculateOrderTotal
 * @param {Array} orderItems
 * @returns {Number}
 * @description Calculates the order total based on the order items
 */
const calculateOrderTotal = ({orderItems}) => {

  if (orderItems.length === 1) return orderItems[0].baseCost;
  
  const reducer = (prev, current) => parseFloat(prev) + parseFloat(current);

  let reducerTotal = orderItems.map(item => item.baseCost).reduce(reducer);
  return reducerTotal
};

export default (state = INITIAL_STATE, action) => {
  const {type: actionType, payload} = action;
  switch (actionType) {
    case POA.ADD_ORDER_ITEM: {
      const {orderItems: _orderItems} = state;
      _orderItems.push(payload);
      const orderTotal = calculateOrderTotal({orderItems: _orderItems});
      return {...state, orderItems: _orderItems, orderTotal};
    }
    case POA.SET_ERROR:
      return {...state, lastError: payload};
    case POA.REMOVE_ALL_ORDER_ITEMS:
      return {...state, orderItems: [], orderTotal: 0};
    case POA.REMOVE_ORDER_ITEM: {
      const _orderItems = [...state.orderItems];
      const {itemIndex} = payload;
      if (typeof itemIndex === 'number') {
        _orderItems.splice(itemIndex, 1);
      }
      const orderTotal = calculateOrderTotal({orderItems: _orderItems});
      return {...state, orderItems: _orderItems, orderTotal};
    }
    case POA.SET_ORDER_SUCCESS:
      return {...state, orderSuccess: payload};
    case POA.SET_REQ_IN_PROGRESS:
      return {...state, requestInProgress: payload};
    case POA.UNSET_DATA:
      return INITIAL_STATE;
    default:
      return state;
  }
};
