import {applyMiddleware, combineReducers, createStore } from "redux"
import { cartReducer } from "./reducers/CartReducer"
import { productsReducer } from "./reducers/ProductsReducer"
import thunk from "redux-thunk"
 export const store = createStore(
    combineReducers({
    products: productsReducer,
    cart: cartReducer
    })
    , applyMiddleware(thunk))