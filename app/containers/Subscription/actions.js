 export const LOAD_SUBSCRIPTION = 'app/Subscription/LOAD_SUBSCRIPTION';
 export const LOAD_SUBSCRIPTION_SUCCESS = 'app/Subscription/LOAD_SUBSCRIPTION_SUCCESS';

 export function loadSubscription(uid, page = 1) {
   return {
     type: LOAD_SUBSCRIPTION,
     page,
     uid,
   };
 }
 export function subscriptionLoaded(result, next) {
   return {
     type: LOAD_SUBSCRIPTION_SUCCESS,
     result,
     next,
   };
 }
