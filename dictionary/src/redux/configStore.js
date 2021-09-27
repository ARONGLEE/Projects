import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import dic from "./modules/dic";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({dic});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;