/*
 *
 * IndexPage reducer
 *
 */

import { fromJS } from 'immutable';

export const CURRENT_TYPE = {
  PODCAST: 'index/currentType/poadcast',
  ALBUM: 'index/currentType/album',
};

// The initial state of the App
const initialState = fromJS({
  current: CURRENT_TYPE.PODCAST,
});

function indexPageReducer(state = initialState, action) {
  switch (action.type) {
    // case LOAD_PODCAST:
    //   return state;
    // case LOAD_ALBUM:
    //   return state;
    // case CHANGE_LIST:
    //   return state;
    default:
      return state;
  }
}

export default indexPageReducer;
