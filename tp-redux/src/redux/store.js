import {combineReducers, createStore } from "redux"
import { cartReducer } from "./reducers/CartReducer"
import { productsReducer } from "./reducers/ProductsReducer"
 
export const store = createStore(
    combineReducers({
    products: productsReducer,
    cart: cartReducer
    })
)