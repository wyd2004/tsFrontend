/*
 *
 * IndexPage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_PODCAST_SUCCESS, LOAD_ALBUM_SUCCESS } from './actions';

// The initial state of the App
const initialState = fromJS({
  podcast: {
    page: 0,
    results: [],
  },
  album: {
    page: 0,
    results: [],
  },
});

function indexPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PODCAST_SUCCESS:
      return state.setIn(['podcast', 'page'], action.more).mergeIn(['podcast', 'results'], action.podcasts);
    case LOAD_ALBUM_SUCCESS:
      return state.setIn(['album', 'page'], action.more).mergeIn(['album', 'results'], action.albums);
    default:
      return state;
  }
}

export default indexPageReducer;
