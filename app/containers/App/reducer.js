/*
 *
 * IndexPage reducer
 *
 */

import { fromJS } from 'immutable';

import { SHOW_DIALOG, HIDE_DIALOG } from './actions';

// The initial state of the App
const initialState = fromJS({
  dialog: null,
  user: null,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_DIALOG:
      return state.set('dialog', {
        type: action.type,
        messages: action.messages,
      });
    case HIDE_DIALOG:
      return state.set('dialog', null);
    default:
      return state;
  }
}

export default globalReducer;
