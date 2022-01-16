import { APP_ACTIONS } from "../constants";

const INITIAL_STATE = {
  authToken: '',
  userProfile: undefined,
};

export default (state = INITIAL_STATE, action) => {
  const {type: actionType, payload} = action;
  switch(actionType) {
    case APP_ACTIONS.SET_AUTH_TOKEN:
      return {...state, authToken: payload};
    case APP_ACTIONS.SET_USER_PROFILE:
      return {...state, userProfile: payload};
    case APP_ACTIONS.UNSET_DATA:
      return INITIAL_STATE
    default:
      return state;
  }
};