import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers';

const configureStore = (preloadedState) => {
  const middlewareEnhancer = applyMiddleware(reduxThunk);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store;
};

export {configureStore};