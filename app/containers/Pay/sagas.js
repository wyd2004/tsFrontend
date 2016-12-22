/* global WX_APP_ID */

import { takeLatest } from 'redux-saga';
import { put, fork, call, select } from 'redux-saga/effects';
import fetchData from 'containers/App/sagas/fetchData';
import wxpay from 'utils/wxbridge';

import { CREATE_ORDER, paySuccessed, payFailed, PAY_TYPE } from './actions';
import { selectCurrentUser } from 'containers/App/selectors';

export function* createOrder(action) {
  const { payType, id } = action;
  const tier = payType === PAY_TYPE.podcast ? 'episode' : 'channel';
  const user = yield select(selectCurrentUser());
  const url = '/term/order/';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      tier,
      member: user.member_id,
      item: id,
      payments: [{ agent: 'wechat' }],
    }),
  };
  const results = yield call(fetchData, { url, options });

  if (results) {
    // TODO: 根据返回值调起支付
    const { payments: { payload } } = results;
    const { prepay_id, pay_sign } = payload;
    const payResult = yield wxpay(prepay_id, pay_sign);
    if (payResult.err_msg === 'get_brand_wcpay_request：ok') {
      yield put(paySuccessed());
    } else {
      yield put(payFailed());
    }
  }
}

export function* watcher() {
  yield fork(takeLatest, CREATE_ORDER, createOrder);
}

export function* pay() {
  yield fork(watcher);
}

// Bootstrap sagas
export default [
  pay,
];
