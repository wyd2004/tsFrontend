import { createSelector } from 'reselect';

/**
* Direct selector to the indexPage state domain
*/
const selectPlayDomain = () => (state) => state.get('play');


/**
* Default selector used by IndexPage
*/

const selectPodcast = () => createSelector(
  selectPlayDomain(),
  (state) => state.get('podcast').toJS(),
);

const selectHistory = () => createSelector(
  selectPlayDomain(),
  (state) => state.getIn(['history', 'results']).toJS(),
);

export {
  selectPodcast,
  selectHistory,
};
