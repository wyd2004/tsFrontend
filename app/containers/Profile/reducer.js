/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';

import { LOAD_SUBSCRIPTION_SUCCESS, LOAD_VIP_SUCCESS, LOAD_PEOPLE_SUCCESS } from './actions';

// The initial state of the App
const initialState = fromJS({
  subscribe: {
    page: 1,
    results: [],
  },
  member: {
    page: 1,
    results: [],
  },
  people: {
    page: 1,
    results: [],
  },
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUBSCRIPTION_SUCCESS:
      return state
        .setIn(['subscribe', 'page'], action.next ? state.getIn(['subscribe', 'page']) + 1 : null)
        .setIn(['subscribe', 'results'], action.results);
    case LOAD_VIP_SUCCESS:
      return state
        .setIn(['member', 'page'], action.next ? state.getIn(['member', 'page']) + 1 : null)
        .setIn(['member', 'results'], action.results);
    case LOAD_PEOPLE_SUCCESS:
      return state
        .setIn(['people', 'page'], action.next ? state.getIn(['people', 'page']) + 1 : null)
        .setIn(['people', 'results'], action.results);
    default:
      return state;
  }
}

export default profileReducer;
