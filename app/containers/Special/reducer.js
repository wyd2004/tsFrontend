/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';

import { LOAD_ABLUM_INFO_SUCCESSED } from './actions';

// The initial state of the App
const initialState = fromJS({
  info: null,
  podcast: {
    page: 0,
    results: [],
  },
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ABLUM_INFO_SUCCESSED:
      return state
        .set('info', action.info)
        .setIn(['podcast', 'page'], action.podcast.next ? state.getIn(['podcast', 'page']) + 1 : null)
        .mergeIn(['podcast', 'results'], action.podcast.results);
    default:
      return state;
  }
}

export default profileReducer;
