import { takeLatest } from 'redux-saga';
import { put, fork, call, select } from 'redux-saga/effects';
import fetchData from 'containers/App/sagas/fetchData';
import cancelSagaOnLocationChange from 'utils/cancelSagaOnLocationChange';
import { selectCurrentUser } from 'containers/App/selectors';
import { normalizeAblum } from 'utils/normalize';

import { LOAD_ALBUM, vipLoaded } from './actions';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* requestVip(action) {
  const user = yield select(selectCurrentUser());
  const url = `/member/${user.member_id}/purchase/album/?page=${action.page}`;
  const response = yield call(fetchData, { url });
  if (response) {
    const { results } = response;
    const normalizedResults = results.map((item) => normalizeAblum(item.album));
    yield put(vipLoaded(normalizedResults));
  }
}

export function* vipWatcher() {
  yield fork(takeLatest, LOAD_ALBUM, requestVip);
}

export function* vip() {
  yield fork(vipWatcher);
}

// Bootstrap sagas
export default cancelSagaOnLocationChange([
  vip,
]);
