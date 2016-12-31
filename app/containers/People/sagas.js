import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import fetchData from 'containers/App/sagas/fetchData';
import cancelSagaOnLocationChange from 'utils/cancelSagaOnLocationChange';
import { normalizePodcast } from 'utils/normalize';

import { LOAD_PEOPLE_PODCASTS, LOAD_PEOPLE, peopleLoaded, podcastLoaded } from './actions';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* requestPodcast(action) {
  const url = `/podcast/people/${action.id}/episode/`;
  const response = yield call(fetchData, { url });
  if (response) {
    const { results, next } = response;
    const normalizedResults = results.map(normalizePodcast);
    yield put(podcastLoaded(normalizedResults, next));
  }
}

export function* podcastWatcher() {
  yield fork(takeLatest, LOAD_PEOPLE_PODCASTS, requestPodcast);
}

export function* podcast() {
  yield fork(podcastWatcher);
}

export function* requestPeople(action) {
  const url = `/podcast/people/${action.id}`;
  const response = yield call(fetchData, { url });
  if (response) {
    yield put(peopleLoaded(response));
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
  podcast,
  people,
]);
