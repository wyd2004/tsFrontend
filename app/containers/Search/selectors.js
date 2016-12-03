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
  (searchState) => ({ result: searchState.get('results') }),
);

export default selectSearchPage;
export {
  selectSearchPageDomain,
};
