import axios from 'axios';

export const FETCH__START = 'FETCH__START';
export const FETCH__SUCCESS = 'FETCH__SUCCESS';
export const FETCH__FAILURE = 'FETCH__FAILURE';

export const get = () => dispatch => {
  dispatch({ type: FETCH__START});
  axios.get('')
    .then(res => dispatch({ type: FETCH__SUCCESS, payload: '' }))
    .catch(err => dispatch({ type: FETCH__FAILURE }))
}