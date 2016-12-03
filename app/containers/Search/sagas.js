import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import fetchData from 'containers/App/sagas/fetchData';

import { SEARCH, searchResult } from './actions';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* requestSearch(action) {
  const url = `/podcast/episode/?search=${action.content}`;
  const results = yield call(fetchData, { url });
  if (results) {
    const memorizedResults = results.map((item) =>
      ({
        ...item,
        desc: item.description || '暂无简介',
        rank: item.episodes_count || 0,
        ablumPicture: item.image,
        time: item.length || 0,
        coast: item.price || 0,
        createDate: item.dt_updated,
      })
    );
    yield put(searchResult(memorizedResults));
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
