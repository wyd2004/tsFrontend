import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import { LOAD_ABLUM_INFO, loaded } from './actions';
import fetchData from 'containers/App/sagas/fetchData';
import cancelSagaOnLocationChange from 'utils/cancelSagaOnLocationChange';
import { normalizeAblum, normalizePodcast } from 'utils/normalize';

export function* getData(action) {
  const infoURL = `/podcast/album/${action.id}/`;
  const podcastURL = `/podcast/album/${action.id}/episode/`;
  const info = yield call(fetchData, { url: infoURL });
  const { results, next } = yield call(fetchData, { url: podcastURL });
  if (info) {
    const normalizedResults = results && results.map((item) => normalizePodcast(item));
    yield put(loaded(normalizeAblum(info), { results: normalizedResults, next }));
  }
}

export function* loadAlbumWatcher() {
  yield fork(takeLatest, LOAD_ABLUM_INFO, getData);
}

export function* loadAlbum() {
  yield fork(loadAlbumWatcher);
}

// Bootstrap sagas
export default cancelSagaOnLocationChange([
  loadAlbum,
]);
