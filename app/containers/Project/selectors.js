import { createSelector } from 'reselect';

const selectProjectDomain = () => (state) => state.get('project');

/**
 * Default selector used by searchPage
 */

const selectProject = () => createSelector(
  selectProjectDomain(),
  (project) => project.toJS(),
);

export default selectProject;
export {
  selectProjectDomain,
};
