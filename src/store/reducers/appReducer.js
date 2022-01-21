import { APP_ACTIONS } from "../constants";

const INITIAL_STATE = {
  authToken: '',
  error: '',
  userProfile: undefined,
  isAuthenticating: false,
  isFetchingProfile: false,
};

export default (state = INITIAL_STATE, action) => {
  const {type: actionType, payload} = action;
  switch(actionType) {
    case APP_ACTIONS.SET_AUTH_TOKEN:
      return {...state, authToken: payload};
    case APP_ACTIONS.SET_ERROR:
      return {...state, erorr: payload};
    case APP_ACTIONS.SET_IS_AUTHENTICATING:
      return {...state, isAuthenticating: payload};
    case APP_ACTIONS.SET_IS_FETCHING_PROFILE:
      return {...state, isFetchingProfile: payload};
    case APP_ACTIONS.SET_USER_PROFILE:
      return {...state, userProfile: payload};
    case APP_ACTIONS.UNSET_DATA:
      return INITIAL_STATE
    default:
      return state;
  }
};