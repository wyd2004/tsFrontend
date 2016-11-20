import expect from 'expect';
import indexPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('indexPageReducer', () => {
  it('returns the initial state', () => {
    expect(indexPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
