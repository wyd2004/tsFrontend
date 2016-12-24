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
  (searchState) => ({
    search: searchState.get('search'),
    podcast: searchState.getIn(['podcast', 'results']).toJS(),
    page: searchState.getIn(['podcast', 'page']),
  }),
);

export default selectSearchPage;
export {
  selectSearchPageDomain,
};
