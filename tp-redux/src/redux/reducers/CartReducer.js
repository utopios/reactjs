import { ADD_PRODUCT_TO_CART } from "../types/CartType"

const initialState = {
    products : [],
    total : 0
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_CART:
            const product = action.payload
            return {...state, products:[...state.products, product], total: state.total + product.price}
        default:
            return state
    }
}