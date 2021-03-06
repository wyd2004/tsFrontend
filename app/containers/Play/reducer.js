/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';

import { LOAD_PODCAST, LOAD_PODCAST_SUCCESS, LOAD_HISTORY_SUCCESS, SUBSCRIBE_SUCCESS, LOAD_INDEX_SUCCESS } from './actions';

// The initial state of the App
const initialState = fromJS({
  podcast: null,
  history: {
    page: 0,
    results: [],
  },
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PODCAST:
      return initialState;
    case LOAD_PODCAST_SUCCESS:
      return state.set('podcast', action.result);
    case LOAD_HISTORY_SUCCESS:
      return state
      .setIn(['history', 'page'], action.more ? state.getIn(['history', 'page']) + 1 : null)
      .mergeIn(['history', 'results'], action.result);
    case LOAD_INDEX_SUCCESS:
      return state
      .setIn(['history', 'page'], action.more ? state.getIn(['history', 'page']) + 1 : null)
      .mergeIn(['history', 'results'], action.result);
    case SUBSCRIBE_SUCCESS:
      return state
      .set('podcast', { ...state.get('podcast'), subscribed: action.subscribed });
    default:
      return state;
  }
}

export default profileReducer;
