import thunk from "redux-thunk";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import CartReducer from "../redux/reducers/cartReducer";

const reducers = combineReducers({
  cart: CartReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;