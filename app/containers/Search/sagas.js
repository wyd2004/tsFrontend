import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import request from 'utils/request';

import { SEARCH, getSearchResult } from './actions';
import { DIALOG_TYPE, showDialog } from 'containers/App/actions';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* requestSearch() {
  const username = 'jonneyyan';
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  try {
    const result = yield call(request, requestURL);
    yield put(getSearchResult(result));
  } catch (err) {
    yield put(showDialog(DIALOG_TYPE.failed, err));
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
export default [
  searchPoadcast,
];
