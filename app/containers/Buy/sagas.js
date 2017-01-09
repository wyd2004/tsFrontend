import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import { LOAD_PODCAST, podcastLoaded } from './actions';
import { normalizePodcast } from 'utils/normalize';

import fetchData from 'containers/App/sagas/fetchData';
// import { selectCurrentUser } from 'containers/App/selectors';

export function* getPodcastData(action) {
  const url = `/podcast/episode/${action.id}/`;
  const results = yield call(fetchData, { url });
  if (results) {
    yield put(podcastLoaded(normalizePodcast(results)));
  }
}

export function* watcher() {
  yield fork(takeLatest, LOAD_PODCAST, getPodcastData);
}

export function* loadPodcast() {
  yield fork(watcher);
}


// Bootstrap sagas
export default [
  loadPodcast,
];
