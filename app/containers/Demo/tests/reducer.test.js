import expect from 'expect';
import demoReducer from '../reducer';
import { fromJS } from 'immutable';

describe('demoReducer', () => {
  it('returns the initial state', () => {
    expect(demoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
