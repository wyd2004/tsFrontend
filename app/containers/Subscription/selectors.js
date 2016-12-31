import { createSelector } from 'reselect';

const selectSubscriptionDomain = () => (state) => state.get('subscription');

const selectSubscription = () => createSelector(
  selectSubscriptionDomain(),
  (subState) => subState.toJS(),
);

export {
  selectSubscription,
};
