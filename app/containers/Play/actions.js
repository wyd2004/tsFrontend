 export const LOAD_PODCAST = 'app/Play/LOAD_PODCAST';
 export const LOAD_HISTORY = 'app/Play/LOAD_HISTORY';
 export const LOAD_PODCAST_SUCCESS = 'app/Play/LOAD_PODCAST_SUCCESS';
 export const LOAD_HISTORY_SUCCESS = 'app/Play/LOAD_HISTORY_SUCCESS';

 export function loadPodcast(id) {
   return {
     type: LOAD_PODCAST,
     id,
   };
 }
 export function loadHistory(id, page = 1) {
   return {
     type: LOAD_HISTORY,
     id,
     page,
   };
 }
 export function podcastLoaded(result) {
   return {
     type: LOAD_PODCAST_SUCCESS,
     result,
   };
 }
 export function historyLoaded(result, more) {
   return {
     type: LOAD_PODCAST_SUCCESS,
     result,
     more,
   };
 }
