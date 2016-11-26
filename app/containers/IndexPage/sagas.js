import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import { showDialog, DIALOG_TYPE } from 'containers/App/actions';
import { LOAD_PODCAST, LOAD_ALBUM, podcastLoaded, ablumLoaded } from './actions';

import { request } from 'utils/request';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* getData(isPodcast) {
  try {
    const url = isPodcast ? 'a' : 'b';
    const loadedAction = isPodcast ? podcastLoaded : ablumLoaded;
    const { results, next: more } = yield call(request, url);
    yield put(loadedAction(results, more));
  } catch (err) {
    yield put(showDialog(DIALOG_TYPE.failed, err));
  }
}

export function* loadPodcastAlbumWatcher() {
  yield fork(takeLatest, LOAD_PODCAST, getData());
  yield fork(takeLatest, LOAD_ALBUM, getData(false));
}

export function* loadPodcastAlbum() {
  yield fork(loadPodcastAlbumWatcher);
}

// Bootstrap sagas
export default [
  loadPodcastAlbum,
];
