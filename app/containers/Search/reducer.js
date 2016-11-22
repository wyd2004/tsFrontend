/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';

import { SEARCH_SUCCESS, SEARCH_ERROR } from './actions';

// The initial state of the App
const initialState = fromJS({
  result: [],
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return state.set('result', action.result);
    case SEARCH_ERROR:
      return state.set('result', null);
    default:
      return state;
  }
}

export default searchPageReducer;
