import { createSelector } from 'reselect';

/**
 * Direct selector to the demo state domain
 */
const selectDemoDomain = () => (state) => state.get('demo');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Demo
 */

const selectDemo = () => createSelector(
  selectDemoDomain(),
  (substate) => substate.toJS()
);

export default selectDemo;
export {
  selectDemoDomain,
};
