import { takeLatest } from 'redux-saga';
import { put, fork, call, select } from 'redux-saga/effects';
import fetchData from 'containers/App/sagas/fetchData';
import cancelSagaOnLocationChange from 'utils/cancelSagaOnLocationChange';
import { selectCurrentUser } from 'containers/App/selectors';
import { normalizeAblum } from 'utils/normalize';

import { LOAD_SUBSCRIPTION, LOAD_VIP, LOAD_PEOPLE, subscriptionLoaded, vipLoaded, peopleLoaded } from './actions';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* requestSubscribe(action) {
  const user = yield select(selectCurrentUser());
  const url = `/member/${user.member_id}/subscription/album/?page=${action.page}`;
  const response = yield call(fetchData, { url });
  if (response) {
    const { results } = response;
    const normalizedResults = results.map((item) => normalizeAblum(item.album));
    yield put(subscriptionLoaded(normalizedResults));
  }
}

export function* subscribeWatcher() {
  yield fork(takeLatest, LOAD_SUBSCRIPTION, requestSubscribe);
}

export function* subscribe() {
  yield fork(subscribeWatcher);
}

export function* requestVip(action) {
  const user = yield select(selectCurrentUser());
  const url = `/member/${user.member_id}/purchase/album/?page=${action.page}`;
  const response = yield call(fetchData, { url });
  if (response) {
    const { results } = response;
    const normalizedResults = results.map((item) => normalizeAblum(item));
    yield put(vipLoaded(normalizedResults));
  }
}

export function* vipWatcher() {
  yield fork(takeLatest, LOAD_VIP, requestVip);
}

export function* vip() {
  yield fork(vipWatcher);
}

export function* requestPeople(action) {
  const url = `/podcast/people/?page=${action.page}`;
  const response = yield call(fetchData, { url });
  if (response) {
    const { results } = response;
    yield put(peopleLoaded(results));
  }
}

export function* peopleWatcher() {
  yield fork(takeLatest, LOAD_PEOPLE, requestPeople);
}

export function* people() {
  yield fork(peopleWatcher);
}

// Bootstrap sagas
export default cancelSagaOnLocationChange([
  subscribe,
  vip,
  people,
]);
