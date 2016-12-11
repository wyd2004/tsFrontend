import { fromJS } from 'immutable';

import { LOAD_PODCAST_SUCCESS } from './actions';

// The initial state of the App
const initialState = fromJS({});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PODCAST_SUCCESS:
      return state.set(action.result);
    default:
      return state;
  }
}

export default profileReducer;
