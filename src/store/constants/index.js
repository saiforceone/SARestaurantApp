
const generateCommonActions = ({prefix = ''}) => ({
  SET_DATA: `${prefix}_SET_DATA`,
  SET_ERROR: `${prefix}_SET_LAST_ERROR`,
  SET_REQ_IN_PROGRESS: `${prefix}_SET_REQ_IN_PROGRESS`,
  TOTAL_COUNT: `${prefix}_SET_TOTAL_COUNT`,
  UNSET_DATA: `${prefix}_UNSET_DATA`
});

export const APP_ACTIONS = {
  SET_AUTH_TOKEN: 'APP_SET_AUTH_TOKEN',
  SET_USER_PROFILE: 'APP_SET_USER_PROFILE',
  UNSET_DATA: 'APP_UNSET_DATA',
};

export const MENU_ITEM_ACTIONS = {
  ...generateCommonActions({prefix: 'MENU_ITEMS'}),
};

export const ORDER_ACTIONS = {
  ...generateCommonActions({prefix: 'ORDER'}),
};

export const RESTAURANT_LOCATION_ACTIONS = {
  ...generateCommonActions({prefix: 'RESTAURANT_LOCATION'}),
};