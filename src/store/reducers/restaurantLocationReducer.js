import { generateCommonState } from "./helpers/generateCommonState";
import { RESTAURANT_LOCATION_ACTIONS as RLA } from "../constants";

const INITIAL_STATE = {
  ...generateCommonState(),
};

export default (state = INITIAL_STATE, action) => {
  const {type: actionType, payload} = action;
  switch(actionType) {
    case RLA.SET_DATA:
      return {...state, items: Array.isArray(payload) ? payload : []};
    case RLA.SET_ERROR:
      return {...state, error: payload};
    case RLA.SET_REQ_IN_PROGRESS:
      return {...state, requestInProgress: payload};
    case RLA.UNSET_DATA:
      return INITIAL_STATE;
    default:
      return state;
  }
}