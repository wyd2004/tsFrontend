import { fromJS } from 'immutable';

import { LOAD_PODCAST_SUCCESS } from './actions';

// The initial state of the App
const initialState = fromJS({});

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PODCAST_SUCCESS:
      return fromJS(action.podcast);
    default:
      return state;
  }
}

export default reducer;
