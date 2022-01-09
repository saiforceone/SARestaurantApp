import {generateCommonState} from "./helpers/generateCommonState";
import { MENU_ITEM_ACTIONS } from "../constants";

const INITIAL_STATE = {
  ...generateCommonState(),
};

export default (state = INITIAL_STATE, action) => {
  const {type: actionType, payload} = action;
  switch(actionType) {
    case MENU_ITEM_ACTIONS.SET_DATA:
      return {...state, items: Array.isArray(payload) ? payload : []};
    case MENU_ITEM_ACTIONS.SET_ERROR:
      return {...state, error: payload};
    case MENU_ITEM_ACTIONS.SET_REQ_IN_PROGRESS:
      return {...state, requestInProgress: payload};
    case MENU_ITEM_ACTIONS.UNSET_DATA:
      return INITIAL_STATE;
    default:
      return state;
  }
}