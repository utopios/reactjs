const initialState = {
    customers:[]
}
export const customerReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CUSTOMER':
            return {...state, customers : [...customers, action.payload]}
        break;
        default:
            return state
        break;
    }
}