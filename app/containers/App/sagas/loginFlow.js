/* global WX_APP_ID */
import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';
import { FETCH_ACCESS_TOKEN, AUTH_ERROR, FETCH_PROFILE, fetchAccessTokenSuccess, fetchProfile, profileLoaded } from 'containers/App/actions';
import fetchData from './fetchData';
import { key } from '../reducer';

/* 微信登录 */

function* weixinWatcher() {
  const handleLogin = (action) => {
    let url = 'https://open.weixin.qq.com/connect/oauth2/authorize';
    url += `?appid=${WX_APP_ID}`;
    url += `&redirect_uri=${encodeURIComponent(action.from)}`;
    url += '&response_type=code';
    url += '&scope=snsapi_userinfo';
    url += '#wechat_redirect';

    console.log('调起登录', url);
    // window.location.href = url;
  };
  yield fork(takeEvery, AUTH_ERROR, handleLogin);
}


function* weixinFlow() {
  yield fork(weixinWatcher);
}

function* fetchAccessToken(action) {
  const formData = new FormData();
  formData.append('code', action.code);
  const results = yield call(fetchData, { url: '/member/oauth', options: { method: 'POST', body: formData } });
  if (results) {
    yield put(fetchAccessTokenSuccess(results));
    yield put(fetchProfile(results.member_id));
    // 此处为hack，暂未找到合适的处理持久化用户token的方法
    try {
      localStorage.setItem(key, JSON.stringify(results));
    } catch (e) {
      console.warn('Could not write session to localStorage:', e)//eslint-disable-line
    }
  }
}

function* authWatcher() {
  yield fork(takeEvery, FETCH_ACCESS_TOKEN, fetchAccessToken);
}
function* authFlow() {
  yield fork(authWatcher);
}

function* getProfile(action) {
  const results = yield call(fetchData, { url: `/member/${action.id}` });
  if (results) {
    yield put(profileLoaded(results));
  }
}

function* profileFlowWatcher() {
  yield fork(takeEvery, FETCH_PROFILE, getProfile);
}
function* profileFlow() {
  yield fork(profileFlowWatcher);
}

export default function* loginFlow() {
  yield fork(weixinFlow);
  yield fork(authFlow);
  yield fork(profileFlow);
}
