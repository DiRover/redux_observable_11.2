import { LOAD_SERVICES_LIST, LOAD_SUCCESS } from "../actions/actionTypes";

const initialState = {
    list: [],
    loading: false,
};

export default function showListReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_SERVICES_LIST:
            return {
                ...state, loading: true,
            }
        case LOAD_SUCCESS:
            console.log( action.payload);
            const {list} = action.payload;
            return {
                ...state, list,
                loading: false,
            }
        
        default:
            return state;
    }
}