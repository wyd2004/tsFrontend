import { createSelector } from 'reselect';

const selectProfileDomain = () => (state) => state.get('people');

const selectProfile = () => createSelector(
   selectProfileDomain(),
   (state) => state.get('profile'),
 );
const selectPodcast = () => createSelector(
   selectProfileDomain(),
   (state) => state.getIn(['podcast', 'results']).toJS(),
 );

export default selectProfileDomain;
export {
  selectProfile,
  selectPodcast,
};
