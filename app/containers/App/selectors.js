/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectCurrentUser = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('user')
);

const selectLoading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('loading')
);

const selectDailog = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('dialog')
);

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectLastPodcast = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('lastPodcast'),
);

export {
  selectGlobal,
  selectCurrentUser,
  selectLoading,
  selectDailog,
  selectLocationState,
  selectLastPodcast,
};
