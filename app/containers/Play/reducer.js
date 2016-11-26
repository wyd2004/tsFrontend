/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';

import { LOAD_SUBSCRIBE, LOAD_MEMBER, LOAD_PEOPLE } from './actions';

// The initial state of the App
const initialState = fromJS({
  subscribe: [],
  member: [],
  people: [],
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUBSCRIBE:
      return state.set('subscribe', action.result);
    case LOAD_MEMBER:
      return state.set('member', action.result);
    case LOAD_PEOPLE:
      return state.set('people', action.result);
    default:
      return state;
  }
}

export default profileReducer;
