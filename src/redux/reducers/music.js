import * as actionTypes from '../constants/index';

export default function updateSongPlay(state = [], { type, payload }) {
  switch(type) {
    case actionTypes.SONGPLAY_UPDATE:
      return payload
    default:
      return state
  }
}