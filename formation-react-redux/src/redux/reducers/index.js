import { combineReducers } from "redux";
import { addressReducer } from "./addressReducer";
import { customerReducer } from "./customerReducer";

export const rootReducer = combineReducers({
    customers: customerReducer,
    addresses: addressReducer
})