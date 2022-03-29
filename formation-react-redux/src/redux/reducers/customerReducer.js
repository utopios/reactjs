import { ADD_CUSTOMER } from "../actions/customerTypes";

const initialState = {
    customers:[],
    loading : false
}
export const customerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CUSTOMER:
            return {...state, customers : [...state.customers, action.payload], loading:false}
        break;
        case 'WAITING_ADD_CUSTOMER':
            return {...state, loading:true}
        break;
        default:
            return state
        break;
    }
}