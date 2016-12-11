import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import cancelSagaOnLocationChange from 'utils/cancelSagaOnLocationChange';

import { LOAD_PROJECT, projectLoaded } from './actions';
import fetchData from 'containers/App/sagas/fetchData';

export function* getData() {
  const url = '/term/tier/';
  const response = yield call(fetchData, { url });
  if (response) {
    const { results } = response;
    const memorizedResults = results.map((item) =>
      ({
        ...item,
        desc: item.message || '',
        limit: item.description || '',
      })
    )
    .filter((item) => item.package === 'channel')
    .sort((a, b) => parseInt(a.price, 10) > parseInt(b.price, 10));
    yield put(projectLoaded(memorizedResults));
  }
}

export function* watcher() {
  yield fork(takeLatest, LOAD_PROJECT, getData);
}

export function* project() {
  yield fork(watcher);
}

// Bootstrap sagas
export default cancelSagaOnLocationChange([
  project,
]);
