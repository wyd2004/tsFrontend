import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import { LOAD_PODCASTS, LOAD_ALBUMS, podcastLoaded, ablumLoaded } from './actions';
import fetchData from 'containers/App/sagas/fetchData';
import cancelSagaOnLocationChange from 'utils/cancelSagaOnLocationChange';

export function* getData(action) {
  const isPodcast = action.type === LOAD_PODCASTS;
  const url = isPodcast ? `/podcast/episode/?page=${action.page}` : `/podcast/album/?page=${action.page}`;
  const loadedAction = isPodcast ? podcastLoaded : ablumLoaded;
  const response = yield call(fetchData, { url });
  if (response) {
    const { results, next } = response;
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
    yield put(loadedAction(memorizedResults, next));
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
