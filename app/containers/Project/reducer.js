/*
 *
 * SearchPage reducer
 *
 */

import { List, fromJS } from 'immutable';

import { LOAD_PROJECT_SUCCESS } from './actions';

// The initial state of the App
const initialState = new List();

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECT_SUCCESS:
      return fromJS(action.results);
    default:
      return state;
  }
}

export default profileReducer;
