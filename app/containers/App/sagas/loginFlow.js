import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import { FETCH_ACCESS_TOKEN, AUTH_ERROR, fetchAccessTokenSuccess } from 'containers/App/actions';
import fetchData from './fetchData';
import { key } from '../reducer';

/* 微信登录 */

function* weixinWatcher() {
  const handleLogin = (action) => {
    let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?';
    url += 'appid=wx4ff6dd6b015ca309';
    url += `&redirect_uri=${encodeURIComponent(action.from)}`;
    url += '&response_type=code';
    url += '&scope=snsapi_userinfo';
    url += '#wechat_redirect';

    window.location.href = url;
  };
  yield fork(takeEvery, AUTH_ERROR, handleLogin);
}


function* weixinFlow() {
  yield fork(weixinWatcher);
}

function* fetchAccessToken(action) {
  const results = yield call(fetchData, { url: `/member/oauth?code=${action.code}` });
  yield put(fetchAccessTokenSuccess(results));
  // 此处为hack，暂未找到合适的处理持久化用户token的方法
  try {
    localStorage.setItem(key, JSON.stringify(results));
  } catch (e) {
    console.warn('Could not write session to localStorage:', e)//eslint-disable-line
  }
}

function* authWatcher() {
  yield fork(takeEvery, FETCH_ACCESS_TOKEN, fetchAccessToken);
}
function* authFlow() {
  yield fork(authWatcher);
}

export default function* loginFlow() {
  yield fork(weixinFlow);
  yield fork(authFlow);
}
