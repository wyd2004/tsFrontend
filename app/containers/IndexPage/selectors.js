import { createSelector } from 'reselect';

/**
 * Direct selector to the indexPage state domain
 */
const selectIndexPageDomain = () => (state) => state.get('index');

/**
 * Other specific selectors
 */


/**
 * Default selector used by IndexPage
 */

const selectIndexPage = () => createSelector(
  selectIndexPageDomain(),
  (indexState) => ({indexState}),
);

export default selectIndexPage;
export {
  selectIndexPageDomain,
};
