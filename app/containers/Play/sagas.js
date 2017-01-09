import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import { LOAD_PODCAST, LOAD_HISTORY, SUBSCRIBE, subscribeSuccessed, podcastLoaded, historyLoaded } from './actions';
import { normalizePodcast } from 'utils/normalize';
import cancelSagaOnLocationChange from 'utils/cancelSagaOnLocationChange';

import fetchData from 'containers/App/sagas/fetchData';

export function* getPodcastData(action) {
  const url = `/podcast/episode/${action.id}/`;
  const results = yield call(fetchData, { url });
  if (results) {
    yield put(podcastLoaded(normalizePodcast(results)));
  }
}
export function* getHistoryData(action) {
  const url = `/podcast/episode/${action.id}/earlier/?page=${action.page}`;
  const response = yield call(fetchData, { url });
  if (response) {
    const { results, next } = response;
    const normalizedResults = results.map(normalizePodcast);
    yield put(historyLoaded(normalizedResults, next));
  }
}

export function* watcher() {
  yield fork(takeLatest, LOAD_PODCAST, getPodcastData);
  yield fork(takeLatest, LOAD_HISTORY, getHistoryData);
}

export function* loadPodcast() {
  yield fork(watcher);
}

export function* subscribePodcast(action) {
  const url = `/podcast/album/${action.id}/subscribe/`;
  const options = {
    method: action.state === 1 ? 'POST' : 'DELETE',
  };
  const results = yield call(fetchData, { url, options });

  if (results) {
    yield put(subscribeSuccessed(action.state));
  }
}

export function* watcherSubscribe() {
  yield fork(takeLatest, SUBSCRIBE, subscribePodcast);
}

export function* sub() {
  yield fork(watcherSubscribe);
}

// Bootstrap sagas
export default cancelSagaOnLocationChange([
  loadPodcast,
  sub,
]);
