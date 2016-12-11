import { createSelector } from 'reselect';

const selectProfileDomain = () => (state) => state.get('profile');

const selectSubscription = () => createSelector(
  selectProfileDomain(),
  (profileState) => profileState.get('subscribe').toJS(),
);

const selectVip = () => createSelector(
  selectProfileDomain(),
  (profileState) => profileState.get('member').toJS(),
);

const selectPeople = () => createSelector(
  selectProfileDomain(),
  (profileState) => profileState.get('people').toJS(),
);

export default selectProfileDomain;
export {
  selectSubscription,
  selectVip,
  selectPeople,
};
