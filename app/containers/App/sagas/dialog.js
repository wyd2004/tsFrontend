import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import { SHOW_DIALOG, HIDE_DIALOG } from 'containers/App/actions';
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export function* handleShowDialog() {
  yield call(delay, 1000);
  yield put({ type: HIDE_DIALOG });
}

export function* dialogWatcher() {
  yield fork(takeEvery, SHOW_DIALOG, handleShowDialog);
}


export default function* dialog() {
  // Fork watcher so we can continue execution
  yield fork(dialogWatcher);
}
