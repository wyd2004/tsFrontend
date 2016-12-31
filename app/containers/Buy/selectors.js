import { createSelector } from 'reselect';

/**
* Direct selector to the indexPage state domain
*/
const selectBuyDomain = () => (state) => state.get('buy');


/**
* Default selector used by IndexPage
*/

const selectPodcast = () => createSelector(
  selectBuyDomain(),
  (state) => ({ podcast: state.toJS() }),
);

export {
  selectPodcast,
};
