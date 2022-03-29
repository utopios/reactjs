import { ADD_PRODUCT, LOAD_PRODUCT, LOAD_PRODUCTS } from "../types/ProductsType"

const initialState = {
    products : [],
    product : undefined
}
export const productsReducer = (state = initialState, action) =>{
    switch(action.type) {
        case LOAD_PRODUCTS:
            return {...state, products : action.payload}
        case LOAD_PRODUCT:
            return {...state, product: action.payload}
        case ADD_PRODUCT:
            return {...state, products : [...state.products,action.payload]}
        default:
            return state       
    }
}  