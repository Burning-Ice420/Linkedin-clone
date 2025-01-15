import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import {thunk} from "redux-thunk";  // Renamed for simplicity

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)  // Middleware applied here
);

export default store;