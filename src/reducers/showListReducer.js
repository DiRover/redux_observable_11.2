import { LOAD_SERVICES_LIST, LOAD_SUCCESS, LOAD_DESCRIPTION } from "../actions/actionTypes";

const initialState = {
    list: [],
    loading: false,
    currentId: null,
};

export default function showListReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_SERVICES_LIST:
            return {
                ...state, loading: true,
            }
        case LOAD_SUCCESS:
            const { list } = action.payload;
            return {
                ...state, list,
                loading: false,
            }
        case LOAD_DESCRIPTION:
            const { id } = action.payload;
            return {
                ...state, loading: true, currentId: id,
            }

        default:
            return state;
    }
}