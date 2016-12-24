import { put, call, select } from 'redux-saga/effects';
import request from 'utils/request';
import { DIALOG_TYPE, authError, showDialog, loading, loaded } from 'containers/App/actions';
import { selectCurrentUser } from 'containers/App/selectors';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve({ errno: 0, test: 'test' }), ms));

export default function* fetchData({ url, options, successMessage, loadIndentify = 'global' }) {
  const { token } = yield select(selectCurrentUser());
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  };
  let results;
  try {
    yield put(loading(loadIndentify));
    results = yield call(request, url, { ...options, headers });
    if (successMessage) {
      yield put(showDialog(DIALOG_TYPE.success, successMessage));
    }
  } catch (error) {
    const response = error.response;
    if (response.status === 401) {
      yield put(authError(window.location.href));
    } else {
      let message = '未知错误';
      try {
        const msg = yield response.json();
        message = msg.detail;
      } catch (e) {
        console.warn('接口调用失败', e)//eslint-disable-line
      } finally {
        put(showDialog(DIALOG_TYPE.error, message));
      }
    }
  }
  yield put(loaded(loadIndentify));
  return results;
}
