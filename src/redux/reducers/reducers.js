import { combineReducers } from 'redux';
import counter from './counter';
import music from './music';
import loading from './loading';

// export default function combineReducers(state = {}, action) {
//   return {
//     counter: counter(state.counter, action)
//   }
// }

export default combineReducers({
  counter,
  music,
  loading
})