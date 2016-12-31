/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';

import { LOAD_ALBUM_SUCCESS } from './actions';

// The initial state of the App
const initialState = fromJS({
  page: 1,
  results: [],
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALBUM_SUCCESS:
      return state
        .setIn(['page'], action.next ? state.getIn(['page']) + 1 : state.getIn(['page']))
        .setIn(['results'], fromJS(action.albums));
    default:
      return state;
  }
}

export default profileReducer;
