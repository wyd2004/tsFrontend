import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import fetchData from 'containers/App/sagas/fetchData';
import cancelSagaOnLocationChange from 'utils/cancelSagaOnLocationChange';
import { normalizePodcast } from 'utils/normalize';

import { SEARCH, searchResult } from './actions';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* requestSearch(action) {
  const url = `/podcast/episode/?search=${action.content}&page=${action.page}`;
  const response = yield call(fetchData, { url });
  if (response) {
    const { results, next } = response;
    const normalizedResults = results.map(normalizePodcast);
    yield put(searchResult(normalizedResults, next));
  }
}

/**
 * Watches for SHOW_DIALOG actions and calls handleShowDialog when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* searchPoadcastWatcher() {
  yield fork(takeLatest, SEARCH, requestSearch);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* searchPoadcast() {
  // Fork watcher so we can continue execution
  yield fork(searchPoadcastWatcher);
}

// Bootstrap sagas
export default cancelSagaOnLocationChange([
  searchPoadcast,
]);
