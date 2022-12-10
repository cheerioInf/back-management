import { combineReducers, legacy_createStore } from "redux";
import numReducer from "./NumState/reducer";
import ArrReducer from "./ArrState/reducer";

const reducer = combineReducers({
  numReducer,
  ArrReducer,
});

const store = legacy_createStore(reducer);

export default store;
