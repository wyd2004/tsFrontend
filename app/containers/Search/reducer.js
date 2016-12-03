/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';

import { SEARCH_SUCCESS } from './actions';

// The initial state of the App
const initialState = fromJS({
  results: [],
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return state.set('results', action.result);
    default:
      return state;
  }
}

export default searchPageReducer;
