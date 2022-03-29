export const addCustomer = (customer) => {
    return {
        type: 'ADD_CUSTOMER',
        payload: customer
    }
}

export const addCustomerAsync = (customer) => {
    return  (dispatch) => {
        dispatch({type: 'WAITING_ADD_CUSTOMER'})
        setTimeout(() => {
            dispatch({
                type: 'ADD_CUSTOMER',
                payload: customer
            })
        }, 3000)
    }
}