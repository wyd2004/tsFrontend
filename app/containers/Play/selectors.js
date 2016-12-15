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
  (state) => state.get('podcast'),
);

const selectHistory = () => createSelector(
  selectPlayDomain(),
  (state) => state.get('history').toJS(),
);

export {
  selectPodcast,
  selectHistory,
};
