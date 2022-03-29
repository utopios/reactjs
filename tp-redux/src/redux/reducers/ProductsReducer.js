import { ADD_PRODUCT, LOADING_PRODUCTS, LOAD_PRODUCT, LOAD_PRODUCTS } from "../types/ProductsType"

const initialState = {
    products : [],
    product : undefined,
    loading: false
}
export const productsReducer = (state = initialState, action) =>{
    switch(action.type) {
        case LOAD_PRODUCTS:
            return {...state, products : action.payload, loading:false}
        case LOAD_PRODUCT:
            return {...state, product: action.payload}
        case ADD_PRODUCT:
            return {...state, products : [...state.products,action.payload]}
        case LOADING_PRODUCTS:
            return {...state, loading:true}
        default:
            return state       
    }
}  