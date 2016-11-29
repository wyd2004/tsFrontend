import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import { showDialog, DIALOG_TYPE } from 'containers/App/actions';
import { LOAD_PODCAST, LOAD_ALBUM, podcastLoaded, ablumLoaded } from './actions';

import requestAPI from 'utils/requestAPI';

export function* getData(action) {
  try {
    const isPodcast = action.type === LOAD_PODCAST;
    const url = isPodcast ? `/podcast/episode/?page=${action.page}` : `/podcast/album/?page=${action.page}`;
    const loadedAction = isPodcast ? podcastLoaded : ablumLoaded;
    const { results, next: more } = yield call(requestAPI, url);
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
    yield put(loadedAction(memorizedResults, more));
  } catch (err) {
    yield put(showDialog(DIALOG_TYPE.failed, err));
  }
}

export function* loadPodcastAlbumWatcher() {
  yield fork(takeLatest, LOAD_PODCAST, getData);
  yield fork(takeLatest, LOAD_ALBUM, getData);
}

export function* loadPodcastAlbum() {
  yield fork(loadPodcastAlbumWatcher);
}

// Bootstrap sagas
export default [
  loadPodcastAlbum,
];
