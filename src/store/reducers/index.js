import { combineReducers } from "redux";

import menuItemReducer from "./menuItemReducer";

const reducers = combineReducers({
  menuItems: menuItemReducer,
});

export default reducers;