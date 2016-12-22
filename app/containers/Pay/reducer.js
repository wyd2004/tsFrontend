import { fromJS } from 'immutable';

import { PAY_SUCCESS, PAY_FAILED } from './actions';

// The initial state of the App
const initialState = fromJS({
  payState: null,
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case PAY_SUCCESS:
      return state.set('payState', 'success');
    case PAY_FAILED:
      return state.set('payState', 'failed');
    default:
      return state;
  }
}

export default profileReducer;
