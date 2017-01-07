import { fromJS } from 'immutable';

import { LOAD_PEOPLE_SUCCESS, LOAD_PEOPLE_PODCASTS_SUCCESS } from './actions';

const initialState = fromJS({
  profile: null,
  podcast: {
    page: 0,
    results: [],
  },
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PEOPLE_SUCCESS:
      return state
        .setIn(['profile'], action.result);
    case LOAD_PEOPLE_PODCASTS_SUCCESS:
      return state
        .setIn(['podcast', 'page'], action.next ? state.getIn(['podcast', 'page']) + 1 : null)
        .mergeIn(['podcast', 'results'], action.results);
    default:
      return state;
  }
}

export default profileReducer;
