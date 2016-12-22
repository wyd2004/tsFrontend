import { createSelector } from 'reselect';

const selectAblumDomain = () => (state) => state.get('special');

/**
 * Default selector used by searchPage
 */

const selectAblum = () => createSelector(
  selectAblumDomain(),
  (specialState) => ({
    info: specialState.get('info'),
    podcast: specialState.get('podcast').toJS(),
  }),
);

export default selectAblum;
export {
  selectAblumDomain,
};
