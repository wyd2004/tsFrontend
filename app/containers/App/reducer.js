/*
 *
 * IndexPage reducer
 *
 */

import { fromJS } from 'immutable';

import { SHOW_DIALOG, HIDE_DIALOG, LOADING, LOADED, FETCH_ACCESS_TOKEN_SUCCESS } from './actions';
import { key as lastPodcastKey } from '../Play/sagas';
export const key = 'USER_DATA';

// let user = {
//   member_id: 1,
//   token: '123456',
//   nickname: 'test_member',
//   avatar: 'https://tower.im/assets/default_avatars/jokul.jpg',
//   expire_datetime: '2016-11-20T14:36:32.427000Z',
// };
let user;
let lastPodcast;
try {
  const userJson = localStorage.getItem(key);
  lastPodcast = localStorage.getItem(lastPodcastKey);
  lastPodcast = lastPodcast && JSON.parse(lastPodcast);
  user = userJson && JSON.parse(userJson);
} catch (e) {
  console.warn('Could not read session from localStorage:', e) //eslint-disable-line
  localStorage.removeItem(key);
}

// The initial state of the App
const initialState = fromJS({
  dialog: null,
  loading: null,
  user: null,
  lastPodcast: null,
}).set('user', user).set('lastPodcast', lastPodcast);

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
    default:
      return state;
  }
}

export default globalReducer;
