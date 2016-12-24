/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';

import { SEARCH, SEARCH_SUCCESS } from './actions';

// The initial state of the App
const initialState = fromJS({
  search: null,
  podcast: {
    page: 0,
    results: [],
  },
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return state.set('search', action.content);
    case SEARCH_SUCCESS:
      return state
      .setIn(['podcast', 'page'], action.next ? state.getIn(['podcast', 'page']) + 1 : null)
      .mergeIn(['podcast', 'results'], action.results);
    default:
      return state;
  }
}

export default searchPageReducer;
