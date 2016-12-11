/*
 *
 * IndexPage actions
 *
 */

export const LOAD_SUBSCRIPTION = 'app/Profile/LOAD_SUBSCRIPTION';
export const LOAD_SUBSCRIPTION_SUCCESS = 'app/Profile/LOAD_SUBSCRIPTION_SUCCESS';
export const LOAD_VIP = 'app/Profile/LOAD_VIP';
export const LOAD_VIP_SUCCESS = 'app/Profile/LOAD_VIP_SUCCESS';
export const LOAD_PEOPLE = 'app/Profile/LOAD_PEOPLE';
export const LOAD_PEOPLE_SUCCESS = 'app/Profile/LOAD_PEOPLE_SUCCESS';

export function loadSubscription(page = 1) {
  return {
    type: LOAD_SUBSCRIPTION,
    page,
  };
}
export function subscriptionLoaded(results, next) {
  return {
    type: LOAD_SUBSCRIPTION_SUCCESS,
    results,
    next,
  };
}

export function loadVip(page = 1) {
  return {
    type: LOAD_VIP,
    page,
  };
}
export function vipLoaded(results, next) {
  return {
    type: LOAD_VIP_SUCCESS,
    results,
    next,
  };
}

export function loadPeople(page = 1) {
  return {
    type: LOAD_PEOPLE,
    page,
  };
}
export function peopleLoaded(results, next) {
  return {
    type: LOAD_PEOPLE_SUCCESS,
    results,
    next,
  };
}
