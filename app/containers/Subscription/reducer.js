import { fromJS } from 'immutable';

import { LOAD_SUBSCRIPTION_SUCCESS } from './actions';

// The initial state of the App
const initialState = fromJS({
  page: 0,
  results: [],
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUBSCRIPTION_SUCCESS:
      return state
        .setIn(['subscription', 'page'], action.next ? state.getIn(['subscription', 'page']) + 1 : null)
        .mergeIn(['subscription', 'results'], action.result);
    default:
      return state;
  }
}

export default profileReducer;
