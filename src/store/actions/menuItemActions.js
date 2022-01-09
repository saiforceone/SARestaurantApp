import axios from "axios";
import { API_ENDPOINTS } from "../../constants";
import { MENU_ITEM_ACTIONS as MIA } from "../constants";
import ActionCreatorUtils from "../utils/ActionCreatorUtils";

/**
 * @function fetchMenuItems
 * @param {Object} filter - filter by
 * @returns 
 * @description Retrieves menu items from the API and populates reducer
 */
export const fetchMenuItems = ({filter = {}}) => {
  return async dispatch => {
    try {
      dispatch(ActionCreatorUtils.buildAction(MIA.SET_ERROR, ''));
      const url = `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.MENU_ITEMS}`;
      dispatch(ActionCreatorUtils.buildAction(MIA.SET_REQ_IN_PROGRESS, true));

      const {data: responseData} = await axios.get(url);
      
      dispatch(ActionCreatorUtils.buildAction(MIA.SET_REQ_IN_PROGRESS, false));

      const {data, success} = responseData;

      console.log('data: ', data);

      if (!success || !Array.isArray(data)) return dispatch(ActionCreatorUtils.buildAction(MIA.SET_ERROR, 'unexpected error retrieving menu items'));

      dispatch(ActionCreatorUtils.buildAction(MIA.SET_DATA, data));
    } catch (e) {
      console.log('fetchMenuItems erorr: ', e.toString());
      dispatch(ActionCreatorUtils.buildAction(MIA.SET_ERROR, e.toString()));
      dispatch(ActionCreatorUtils.buildAction(MIA.SET_REQ_IN_PROGRESS, false));
    }
  }
};