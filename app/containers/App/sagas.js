import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import { SHOW_DIALOG, HIDE_DIALOG, DIALOG_TYPE } from 'containers/App/actions';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* handleShowDialog() {
  try {
    yield call(delay, 1000);
    yield put({ type: HIDE_DIALOG });
  } catch (err) {
    yield put({ type: SHOW_DIALOG, dialogType: DIALOG_TYPE.failed, messages: err });
  }
}

/**
 * Watches for SHOW_DIALOG actions and calls handleShowDialog when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* deialogWatcher() {
  yield fork(takeLatest, SHOW_DIALOG, handleShowDialog);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* dialog() {
  // Fork watcher so we can continue execution
  yield fork(deialogWatcher);
}

// Bootstrap sagas
export default [
  dialog,
];
