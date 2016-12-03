/*
 *
 * IndexPage reducer
 *
 */

import { fromJS } from 'immutable';

import { SHOW_DIALOG, HIDE_DIALOG, LOADING, LOADED } from './actions';

export const key = 'USER_DATA';

let user;
try {
  const json = localStorage.getItem(key);
  if (json) {
    user = JSON.parse(json);
  }
} catch (e) {
  console.warn('Could not read session from localStorage:', e) //eslint-disable-line
  localStorage.removeItem(key);
}

// The initial state of the App
const initialState = fromJS({
  dialog: null,
  loading: null,
  user,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_DIALOG:
      return state.set('dialog', {
        type: action.dialogType,
        message: action.message,
      });
    case HIDE_DIALOG:
      return state.set('dialog', null);
    case LOADING:
      return state.set('loading', action.indentify);
    case LOADED:
      return state.set('loading', null);
    default:
      return state;
  }
}

export default globalReducer;
