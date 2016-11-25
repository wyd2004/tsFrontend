/*
 *
 * IndexPage actions
 *
 */

export const LOAD_SUBSCRIBE = 'app/Profile/LOAD_SUBSCRIBE';
export const LOAD_MEMBER = 'app/Profile/LOAD_MEMBER';
export const LOAD_PEOPLE = 'app/Profile/LOAD_PEOPLE';

export function loadSubscribe(result) {
  return {
    type: LOAD_SUBSCRIBE,
    result,
  };
}
export function loadMember(result) {
  return {
    type: LOAD_MEMBER,
    result,
  };
}
export function loadPeople(result) {
  return {
    type: LOAD_PEOPLE,
    result,
  };
}
