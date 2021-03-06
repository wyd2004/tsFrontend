export const LOAD_PODCAST = 'app/Play/LOAD_PODCAST';
export const LOAD_PODCAST_SUCCESS = 'app/Play/LOAD_PODCAST_SUCCESS';
export const LOAD_HISTORY = 'app/Play/LOAD_HISTORY';
export const LOAD_HISTORY_SUCCESS = 'app/Play/LOAD_HISTORY_SUCCESS';
export const LOAD_INDEX = 'app/Play/LOAD_INDEX';
export const LOAD_INDEX_SUCCESS = 'app/Play/LOAD_INDEX_SUCCESS';

export const SUBSCRIBE = 'app/Play/SUBSCRIBE';
export const SUBSCRIBE_SUCCESS = 'app/Play/SUBSCRIBE_SUCCESS';

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
export function loadIndex() {
  return {
    type: LOAD_INDEX,
  };
}

export function indexLoaded(result, more) {
  return {
    type: LOAD_INDEX_SUCCESS,
    result,
    more,
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
    type: LOAD_HISTORY_SUCCESS,
    result,
    more,
  };
}

export function subscribe(id, state) {
  return {
    type: SUBSCRIBE,
    id,
    state,
  };
}

export function subscribeSuccessed(state) {
  return {
    type: SUBSCRIBE_SUCCESS,
    subscribed: state === 1,
  };
}
