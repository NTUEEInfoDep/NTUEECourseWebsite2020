import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers";
import initialState from "../constants/initialState";

export default function configureStore(preloadedState = initialState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
    // applyMiddleware(thunk, logger)
  );
}
