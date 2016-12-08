/*
 *
 * IndexPage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_PODCASTS_SUCCESS, LOAD_ALBUMS_SUCCESS } from './actions';

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
    case LOAD_PODCASTS_SUCCESS:
      return state
      .setIn(['podcast', 'page'], action.next ? state.getIn(['podcast', 'page']) + 1 : null)
      .mergeIn(['podcast', 'results'], action.podcasts);
    case LOAD_ALBUMS_SUCCESS:
      return state
      .setIn(['album', 'page'], action.next ? state.getIn(['album', 'page']) + 1 : null)
      .mergeIn(['album', 'results'], action.albums);
    default:
      return state;
  }
}

export default indexPageReducer;
