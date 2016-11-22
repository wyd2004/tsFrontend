import { createSelector } from 'reselect';

const selectSearchPageDomain = () => (state) => state.get('search');

/**
 * Other specific selectors
 */


/**
 * Default selector used by searchPage
 */

const selectSearchPage = () => createSelector(
  selectSearchPageDomain(),
  (searchState) => ({ searchState }),
);

export default selectSearchPage;
export {
  selectSearchPageDomain,
};
