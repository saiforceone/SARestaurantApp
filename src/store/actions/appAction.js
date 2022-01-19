import axios from 'axios';
import {API_ENDPOINTS, STORAGE_CONSTANTS} from '../../constants';
import { APP_ACTIONS, ORDER_ACTIONS } from '../constants';
import ActionCreatorUtils from '../utils/ActionCreatorUtils';
import StorageUtils from '../../utils/StorageUtils';

/**
 * @function authenticate
 * @param {String} username
 * @param {String} password
 * @param {Object} navigation
 * @param {Boolean} isRegistering
 * @returns {*}
 * @description Action creator that handles authentication
 */
export const authenticate = ({username, password, navigation, isRegistering = false}) => {
  return async dispatch => {
    try {
      dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.SET_IS_AUTHENTICATING, false));
      dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.SET_ERROR, ''));

      const url = `${API_ENDPOINTS.BASE_URL}${isRegistering ? API_ENDPOINTS.AUTH_LOCAL_REGISTER : API_ENDPOINTS.AUTH_LOCAL_LOGIN}`;

      const payload = {
        username,
        password,
      };

      dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.SET_IS_AUTHENTICATING, true));
      const {data: responseData} = await axios.post(url, payload);
      dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.SET_IS_AUTHENTICATING, false));

      const {success, data} = responseData;

      if (!success || !data['token']) {
        return dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.SET_ERROR, 'Failed to authenticate. Check credentials'));
      }

      dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.SET_AUTH_TOKEN, data.token));
      const storeResult = await StorageUtils.setItemSecure({
        key: STORAGE_CONSTANTS.AUTH_TOKEN, value: data.token
      });
      if (storeResult.error) {
        return dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.SET_ERROR, 'Something went horribly wrong'));
      }
      navigation.pop();

    } catch (e) {
      dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.SET_IS_AUTHENTICATING, false));
      dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.SET_ERROR, e.toString()));
    }
  }
};

/**
 * @function logout
 * @returns {*}
 * @description logs the user out and clears local data
 */
export const logout = () => {
  return async dispatch => {
    try {
      dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.UNSET_DATA));
      dispatch(ActionCreatorUtils.buildAction(ORDER_ACTIONS.UNSET_DATA));
      const deleted = await StorageUtils.deleteItemSecure({key: STORAGE_CONSTANTS.AUTH_TOKEN});
      if (!deleted) {
        return dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.SET_ERROR, 'Failed to logout'));
      }
    } catch (e) {
      dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.SET_ERROR, e.toString()));
    }
  }
}
