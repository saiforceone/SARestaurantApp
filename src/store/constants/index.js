
const generateCommonActions = ({prefix = ''}) => ({
  SET_DATA: `${prefix}_SET_DATA`,
  SET_ERROR: `${prefix}_SET_LAST_ERROR`,
  SET_REQ_IN_PROGRESS: `${prefix}_SET_REQ_IN_PROGRESS`,
  TOTAL_COUNT: `${prefix}_SET_TOTAL_COUNT`,
  UNSET_DATA: `${prefix}_UNSET_DATA`
});

export const APP_ACTIONS = {
  SET_AUTH_TOKEN: 'APP_SET_AUTH_TOKEN',
  SET_ERROR: 'APP_SET_ERROR',
  SET_IS_AUTHENTICATING: 'APP_SET_IS_AUTHENTICATING',
  SET_USER_PROFILE: 'APP_SET_USER_PROFILE',
  SET_IS_FETCHING_PROFILE: 'APP_SET_IS_FETCHING_PROFILE',
  UNSET_DATA: 'APP_UNSET_DATA',
};

export const MENU_ITEM_ACTIONS = {
  ...generateCommonActions({prefix: 'MENU_ITEMS'}),
};

export const ORDER_ACTIONS = {
  ...generateCommonActions({prefix: 'ORDER'}),
};

export const PLACE_ORDER_ACTIONS = {
  ADD_ORDER_ITEM: 'PLACE_ORDER_ADD_ITEM',
  REMOVE_ALL_ORDER_ITEMS: 'PLACE_ORDER_REMOVE_ALL_ITEMS',
  REMOVE_ORDER_ITEM: 'PLACE_ORDER_REMOVE_ITEM',
  SET_ERROR: 'PLACE_ORDER_SET_ERROR',
  SET_ORDER_SUCCESS: 'PLACE_ORDER_SET_SUCCESS',
  SET_REQ_IN_PROGRESS: 'PLACE_ORDER_SET_REQ_IN_PROGRESS',
  UNSET_DATA: 'PLACE_ORDER_UNSET_DATA'
};

export const RESTAURANT_LOCATION_ACTIONS = {
  ...generateCommonActions({prefix: 'RESTAURANT_LOCATION'}),
};