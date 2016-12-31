import { takeLatest } from 'redux-saga';
import { put, fork, call, select } from 'redux-saga/effects';
import fetchData from 'containers/App/sagas/fetchData';
import cancelSagaOnLocationChange from 'utils/cancelSagaOnLocationChange';
import { selectCurrentUser } from 'containers/App/selectors';
import { normalizeAblum } from 'utils/normalize';

import { LOAD_ALBUM, albumLoaded } from './actions';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* requestSubscribe(action) {
  const user = yield select(selectCurrentUser());
  const url = `/member/${user.member_id}/subscription/album/?page=${action.page}`;
  const response = yield call(fetchData, { url });
  if (response) {
    const { results, next } = response;
    const normalizedResults = results.map((item) => normalizeAblum(item.album));
    yield put(albumLoaded(normalizedResults, next));
  }
}

export function* subscribeWatcher() {
  yield fork(takeLatest, LOAD_ALBUM, requestSubscribe);
}

export function* subscribe() {
  yield fork(subscribeWatcher);
}

// Bootstrap sagas
export default cancelSagaOnLocationChange([
  subscribe,
]);
