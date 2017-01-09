import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import { LOAD_PODCASTS, LOAD_ALBUMS, podcastLoaded, ablumLoaded } from './actions';
import fetchData from 'containers/App/sagas/fetchData';
import cancelSagaOnLocationChange from 'utils/cancelSagaOnLocationChange';
import { normalizePodcast, normalizeAblum } from 'utils/normalize';

export function* getData(action) {
  const isPodcast = action.type === LOAD_PODCASTS;
  const url = isPodcast ? `/podcast/episode/?page=${action.page}/` : `/podcast/album/?page=${action.page}/`;
  const normalizer = isPodcast ? normalizePodcast : normalizeAblum;
  const loadedAction = isPodcast ? podcastLoaded : ablumLoaded;
  const response = yield call(fetchData, { url });
  if (response) {
    const { results, next } = response;
    const normalizedResults = results.map(normalizer);
    yield put(loadedAction({ results: normalizedResults, next }));
  }
}

export function* loadPodcastAlbumWatcher() {
  yield fork(takeLatest, LOAD_PODCASTS, getData);
  yield fork(takeLatest, LOAD_ALBUMS, getData);
}

export function* loadPodcastAlbum() {
  yield fork(loadPodcastAlbumWatcher);
}

// Bootstrap sagas
export default cancelSagaOnLocationChange([
  loadPodcastAlbum,
]);
