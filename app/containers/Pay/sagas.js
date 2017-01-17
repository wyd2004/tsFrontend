import { takeLatest } from 'redux-saga';
import { put, fork, call, select } from 'redux-saga/effects';
import fetchData from 'containers/App/sagas/fetchData';
import { DIALOG_TYPE, showDialog } from 'containers/App/actions';
import wxpay from 'utils/wxbridge';

import { CREATE_ORDER, paySuccessed, payFailed, PAY_TYPE } from './actions';
import { selectCurrentUser } from 'containers/App/selectors';

export function* createOrder(action) {
  const { payType, id } = action;
  const tier = payType === PAY_TYPE.podcast ? 5 : +id;
  const item = payType === PAY_TYPE.podcast ? +id : 1;
  const user = yield select(selectCurrentUser());
  const url = '/term/order/';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      tier,
      member: user.member_id,
      item,
      payments: [{ agent: 'wechat', status: 'wait-for-payment' }],
    }),
  };
  const results = yield call(fetchData, { url, options });

  if (results) {
    const { payments } = results;
    const { prepay_id, sign, nonce_str, timestamp } = payments && payments[0] && payments[0].payload;
    if (!sign) {
      yield put(showDialog(DIALOG_TYPE.error, '生成订单失败，请返回重试'));
    } else {
      const payResult = yield wxpay(prepay_id, sign, nonce_str, timestamp);
      if (payResult.err_msg === 'get_brand_wcpay_request:ok') {
        yield put(paySuccessed());
      } else {
        yield put(payFailed());
      }
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
