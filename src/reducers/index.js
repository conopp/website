import { FETCH__START, FETCH__SUCCESS, FETCH__FAILURE } from '../actions';

export const initialState = {
  placeholder: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(FETCH__START): return ({
      ...state
    })
    case(FETCH__SUCCESS): return ({
      ...state
    })
    case(FETCH__FAILURE): return ({
      ...state
    })
    default: return state;
  }
}

export default reducer;