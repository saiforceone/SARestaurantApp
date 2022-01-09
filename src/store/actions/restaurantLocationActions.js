import axios from "axios";
import { API_ENDPOINTS } from "../../constants";
import { RESTAURANT_LOCATION_ACTIONS as RLA } from "../constants";
import ActionCreatorUtils from "../utils/ActionCreatorUtils";

export const fetchRestaurantLocations = () => {
  return async dispatch => {
    try {
      const url = `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.RESTAURANT_LOCATIONS}`;
      dispatch(ActionCreatorUtils.buildAction(RLA.SET_REQ_IN_PROGRESS, true));
      const {data: responseData} = await axios.get(url);
      dispatch(ActionCreatorUtils.buildAction(RLA.SET_REQ_IN_PROGRESS, false));
      const {data, success} = responseData;
      if (!success) return dispatch(ActionCreatorUtils.buildAction(RLA.SET_ERROR, 'an unexpected error occurred'));
      dispatch(ActionCreatorUtils.buildAction(RLA.SET_DATA, data));
    } catch (e) {
      dispatch(ActionCreatorUtils.buildAction(RLA.SET_ERROR, e.toString()));
      dispatch(ActionCreatorUtils.buildAction(RLA.SET_REQ_IN_PROGRESS, false));
    }
  }
};