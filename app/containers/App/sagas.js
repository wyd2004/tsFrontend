import { fork } from 'redux-saga/effects';

import dialog from './sagas/dialog';
import loginFlow from './sagas/loginFlow';

export default function* global() {
  yield fork(dialog);
  yield fork(loginFlow);
}
