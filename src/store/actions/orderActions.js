import axios from 'axios';
import { API_ENDPOINTS } from '../../constants';
import { ORDER_ACTIONS } from '../constants';
import ActionCreatorUtils from '../utils/ActionCreatorUtils';
import StorageUtils from '../../utils/StorageUtils';
import { STORAGE_CONSTANTS } from '../../constants';

export const fetchOrders = () => {
  return async dispatch => {
    try {
      dispatch(ActionCreatorUtils.buildAction(ORDER_ACTIONS.SET_ERROR, ''));

      const tokenData = await StorageUtils.getItemSecure({key: STORAGE_CONSTANTS.AUTH_TOKEN});

      if (!tokenData.data) {
        return dispatch(ActionCreatorUtils.buildAction(ORDER_ACTIONS.SET_ERROR, 'Not logged in'));
      }

      const headers = {
        authorization: tokenData.data,
      };

      const url = `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.ORDERS}/current-user`;
      
      dispatch(ActionCreatorUtils.buildAction(ORDER_ACTIONS.SET_REQ_IN_PROGRESS, true));
      const {data: responseData} = await axios.get(url, {headers});
      dispatch(ActionCreatorUtils.buildAction(ORDER_ACTIONS.SET_REQ_IN_PROGRESS, false));
      const {data, success} = responseData;
      if (!success) return dispatch(ActionCreatorUtils.buildAction(ORDER_ACTIONS.SET_ERROR, 'an unexpected error occurred'));
      dispatch(ActionCreatorUtils.buildAction(ORDER_ACTIONS.SET_DATA, data));
    } catch (e) {
      dispatch(ActionCreatorUtils.buildAction(ORDER_ACTIONS.SET_REQ_IN_PROGRESS, false));
      return dispatch(ActionCreatorUtils.buildAction(ORDER_ACTIONS.SET_ERROR, e.toString()));
    }
  }
}