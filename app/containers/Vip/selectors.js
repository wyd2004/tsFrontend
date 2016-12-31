import { createSelector } from 'reselect';

const selectVipDomain = () => (state) => state.get('vip');

const selectVip = () => createSelector(
  selectVipDomain(),
  (subState) => subState.toJS(),
);

export {
  selectVip,
};
