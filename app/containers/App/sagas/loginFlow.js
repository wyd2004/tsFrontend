/* global WX_APP_ID */
import { takeEvery, takeLatest } from 'redux-saga';
import { put, fork, call, select } from 'redux-saga/effects';
import { selectCurrentUser } from '../selectors';
import { FETCH_ACCESS_TOKEN, FETCH_USERINFO, getUserInfoSuccess, AUTH_ERROR, fetchAccessTokenSuccess } from '../actions';
import fetchData from './fetchData';
import { key } from '../reducer';

/* 微信登录 */

function* weixinWatcher() {
  const handleLogin = () => {
    let url = 'https://open.weixin.qq.com/connect/oauth2/authorize';
    url += `?appid=${WX_APP_ID}`;
    url += `&redirect_uri=${encodeURIComponent('http://vip.tangsuanradio.com/mp')}`;
    url += '&response_type=code';
    url += '&scope=snsapi_userinfo';
    url += '#wechat_redirect';

    // console.log('调起登录', url);
    window.location.href = url;
  };
  yield fork(takeLatest, AUTH_ERROR, handleLogin);
}

function* weixinFlow() {
  yield fork(weixinWatcher);
}

function* fetchAccessToken(action) {
  const options = {
    method: 'POST',
    body: JSON.stringify({ code: action.code }),
  };
  const results = yield call(fetchData, { url: '/member/oauth/', options });
  if (results) {
    yield put(fetchAccessTokenSuccess(results));
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

function* getUser() {
  const user = yield select(selectCurrentUser());
  const results = yield call(fetchData, { url: `/member/${user.member_id}/` });
  const finalUser = { ...user, ...results };
  if (results) {
    yield put(getUserInfoSuccess(finalUser));
    // 此处为hack，暂未找到合适的处理持久化用户token的方法
    try {
      localStorage.setItem(key, JSON.stringify(finalUser));
    } catch (e) {
      console.warn('Could not write session to localStorage:', e)//eslint-disable-line
    }
  }
}

function* userInfoWatcher() {
  yield fork(takeEvery, FETCH_USERINFO, getUser);
}
function* userInfo() {
  yield fork(userInfoWatcher);
}


export default function* loginFlow() {
  yield fork(weixinFlow);
  yield fork(authFlow);
  yield fork(userInfo);
}
