import { combineReducers } from "redux";

import appReducer from "./appReducer";
import menuItemReducer from "./menuItemReducer";
import ordersReducer from "./ordersReducer";
import placeOrderReducer from "./placeOrderReducer";
import restaurantLocationReducer from "./restaurantLocationReducer";

const reducers = combineReducers({
  app: appReducer,
  menuItems: menuItemReducer,
  orders: ordersReducer,
  placeOrder: placeOrderReducer,
  restaurantLocations: restaurantLocationReducer,
});

export default reducers;