import { fakeData, addProduct as addProductFakeData, foundById, getFakeDataAsync } from "../../utils/fakedata"
import { ADD_PRODUCT, LOADING_PRODUCTS, LOAD_PRODUCT, LOAD_PRODUCTS } from "../types/ProductsType"

export const loadProducts = () => {
    return async (dispatch) => {
        dispatch({type : LOADING_PRODUCTS})
        const data = await getFakeDataAsync()
        dispatch({type: LOAD_PRODUCTS, payload: data})
    }
    // return {
    //     type : LOAD_PRODUCTS,
    //     payload : fakeData
    // }
}

export const addProduct = (product) => {
    addProductFakeData(product)
    return {
        type: ADD_PRODUCT,
        payload : product
    }
}

export const loadProduct = (id) => {
    return {
        type: LOAD_PRODUCT,
        payload: foundById(id)
    }
}