import * as actionTypes from '../constants/index';

const initialState = 0;
export default function loading(state = initialState, { type, payload }) {
  switch(type) {
    case actionTypes.LOADING_SHOW:
      return state + 1;
    case actionTypes.LOADING_HIDE:
      return state - 1;
    case actionTypes.LOADING_RESET:
      return initialState;
    default:
      return state
  }
}