import { createSelector } from 'reselect';

/**
* Direct selector to the indexPage state domain
*/
const selectSubscriptionDomain = () => (state) => state.get('subscription');


/**
* Default selector used by IndexPage
*/

const selectPodcast = () => createSelector(
  selectSubscriptionDomain(),
  (state) => state.getIn(['subscription', 'results']),
);


export {
  selectPodcast,
};
