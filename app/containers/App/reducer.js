/*
 *
 * IndexPage reducer
 *
 */

import { fromJS } from 'immutable';

import { SHOW_DIALOG, HIDE_DIALOG, LOADING, LOADED, FETCH_PROFILE_SUCCESS, FETCH_ACCESS_TOKEN_SUCCESS } from './actions';

export const key = 'USER_DATA';

// let user = {
//   member_id: 1,
//   token: '123456',
//   nickname: 'test_member',
//   avatar: 'https://tower.im/assets/default_avatars/jokul.jpg',
//   expire_datetime: '2016-11-20T14:36:32.427000Z',
// };
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
  user: null,
}).set('user', user);

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
    case FETCH_ACCESS_TOKEN_SUCCESS:
      return state.set('user', action.userData);
    case FETCH_PROFILE_SUCCESS:
      return state.mergeIn(['user'], action.userData);
    default:
      return state;
  }
}

export default globalReducer;
