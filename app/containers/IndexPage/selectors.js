import { createSelector } from 'reselect';

/**
* Direct selector to the indexPage state domain
*/
const selectIndexPageDomain = () => (state) => state.get('indexPage');


/**
* Default selector used by IndexPage
*/

const selectPodcast = () => createSelector(
  selectIndexPageDomain(),
  (indexState) => indexState.getIn(['podcast', 'results']).toJS(),
);

const selectAblum = () => createSelector(
  selectIndexPageDomain(),
  (indexState) => indexState.getIn(['album', 'results']).toJS(),
);

export {
  selectPodcast,
  selectAblum,
};
