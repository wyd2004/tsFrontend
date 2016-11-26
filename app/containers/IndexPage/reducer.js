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
    result: [],
  },
  album: {
    page: 0,
    result: [],
  },
});

function indexPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PODCAST_SUCCESS:
      return state.setIn(['podcast', 'page'], action.page).mergeIn(['podcast', 'result'], action.podcasts);
    case LOAD_ALBUM_SUCCESS:
      return state.setIn(['ablum', 'page'], action.page).mergeIn(['album', 'result'], action.albums);
    default:
      return state;
  }
}

export default indexPageReducer;
