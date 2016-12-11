export const LOAD_PODCAST = 'app/buy/LOAD_PODCAST';
export const LOAD_PODCAST_SUCCESS = 'app/buy/LOAD_PODCAST_SUCCESS';
export const CREATE_ORDER = 'app/buy/CREATE_ORDER';

export function loadPodcast(id) {
  return {
    type: LOAD_PODCAST,
    id,
  };
}

export function podcastLoaded(result) {
  return {
    type: LOAD_PODCAST_SUCCESS,
    result,
  };
}

export function requireOrder(id) {
  return {
    type: CREATE_ORDER,
    id,
  };
}
