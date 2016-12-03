import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import { LOAD_PODCAST, LOAD_HISTORY, podcastLoaded, historyLoaded } from './actions';

import fetchData from 'containers/App/sagas/fetchData';

export function* getPodcastData(action) {
  const url = `/podcast/episode/${action.id}`;
  const results = yield call(fetchData, { url });

  if (results) {
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
    yield put(podcastLoaded(memorizedResults));
  }
}
export function* getHistoryData(action) {
  const url = `/podcast/episode/${action.id}/earlier/?page=${action.page}`;
  const results = yield call(fetchData, { url });

  if (results) {
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
    yield put(historyLoaded(memorizedResults));
  }
}

export function* watcher() {
  yield fork(takeLatest, LOAD_PODCAST, getPodcastData);
  yield fork(takeLatest, LOAD_HISTORY, getHistoryData);
}

export function* loadPodcast() {
  yield fork(watcher);
}

// Bootstrap sagas
export default [
  loadPodcast,
];
