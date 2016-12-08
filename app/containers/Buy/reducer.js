/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';

import { LOAD_PODCAST_SUCCESS, LOAD_HISTORY_SUCCESS } from './actions';

// The initial state of the App
const initialState = fromJS({
  podcast: {},
  history: {
    page: 1,
    results: [],
  },
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PODCAST_SUCCESS:
      return state.set('podcast', action.result);
    case LOAD_HISTORY_SUCCESS:
      return state
      .set('history', action.more ? state.getIn(['album', 'page']) + 1 : null)
      .setIn(['history', 'results'], action.result);
    default:
      return state;
  }
}

export default profileReducer;
