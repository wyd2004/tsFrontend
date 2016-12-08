import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import cancelSagaOnLocationChange from 'utils/cancelSagaOnLocationChange';

import { LOAD_SUBSCRIPTION, subscriptionLoaded } from './actions';

import fetchData from 'containers/App/sagas/fetchData';

export function* getData(action) {
  const url = `/member/${action.uid}/subscription/album?page=${action.page}`;
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
    yield put(subscriptionLoaded(memorizedResults, next));
  }
}

export function* watcher() {
  yield fork(takeLatest, LOAD_SUBSCRIPTION, getData);
}

export function* loadSubscription() {
  yield fork(watcher);
}

// Bootstrap sagas
export default cancelSagaOnLocationChange([
  loadSubscription,
]);
