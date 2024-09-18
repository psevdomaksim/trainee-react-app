import { combineReducers, createStore } from "redux";
import AuthReducer from "./Reducers/AuthReducer";

const Reducers = combineReducers({
  authPage: AuthReducer,
});

const store = createStore(Reducers);

export default store;
