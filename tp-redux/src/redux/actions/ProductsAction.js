import { fakeData, addProduct as addProductFakeData, foundById } from "../../utils/fakedata"
import { ADD_PRODUCT, LOAD_PRODUCT, LOAD_PRODUCTS } from "../types/ProductsType"

export const loadProducts = () => {
    return {
        type : LOAD_PRODUCTS,
        payload : fakeData
    }
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