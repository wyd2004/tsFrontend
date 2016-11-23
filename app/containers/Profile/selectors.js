import { createSelector } from 'reselect';

const selectProfileDomain = () => (state) => state.get('profile');

/**
 * Default selector used by searchPage
 */

const selectProfile = () => createSelector(
  selectProfileDomain(),
  (profileState) => ({ profileState }),
);

export default selectProfile;
export {
  selectProfileDomain,
};
