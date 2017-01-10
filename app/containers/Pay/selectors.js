import { createSelector } from 'reselect';

const selectPayDomain = () => (state) => state.get('pay');

const selectPay = () => createSelector(
  selectPayDomain(),
  (state) => state.get('payState'),
);

export {
  selectPay,
};
