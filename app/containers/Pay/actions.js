export const CREATE_ORDER = 'app/buy/CREATE_ORDER';
export const REQUEST_PAY = 'app/buy/REQUEST_PAY';
export const PAY_SUCCESS = 'app/buy/PAY_SUCCESS';
export const PAY_FAILED = 'app/buy/PAY_FAILED';

export const PAY_TYPE = {
  podcast: 'PAY_PODCAST',
  project: 'PAY_PROJECT',
};
export function requireOrder({ payType, id, detail }) {
  return {
    type: CREATE_ORDER,
    payType,
    id,
    detail,
  };
}

export function paySuccessed() {
  return {
    type: PAY_SUCCESS,
  };
}

export function payFailed() {
  return {
    type: PAY_FAILED,
  };
}
