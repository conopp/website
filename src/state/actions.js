import axios from 'axios';

export const FETCH_USER_START = 'FETCH__START';
export const FETCH_USER_SUCCESS = 'FETCH__SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH__FAILURE';

export const get = () => dispatch => {
    dispatch({ type: FETCH_USER_START});
    axios.get('')
        .then(res => dispatch({ type: FETCH_USER_SUCCESS, payload: '' }))
        .catch(err => dispatch({ type: FETCH_USER_FAILURE }));
}