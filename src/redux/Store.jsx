import { applyMiddleware, combineReducers, createStore } from "redux";
import AuthReducer from "./Reducers/AuthReducer";
import { thunk } from "redux-thunk";
import CardsReducer from "./Reducers/CardsReducer";


const Reducers = combineReducers({
  authPage: AuthReducer,
  cardsPage: CardsReducer
});

const store = createStore(Reducers, applyMiddleware(thunk));

export default store;
