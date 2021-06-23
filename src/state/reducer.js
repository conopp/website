import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from './actions.js';

export const initialState = {
    placeholder: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_USER_START): return ({
            ...state
        })
        case(FETCH_USER_SUCCESS): return ({
            ...state
        })
        case(FETCH_USER_FAILURE): return ({
            ...state
        })
        default: return state;
    }
}

export default reducer;