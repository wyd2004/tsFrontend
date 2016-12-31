export const LOAD_PODCAST = 'app/buy/LOAD_PODCAST';
export const LOAD_PODCAST_SUCCESS = 'app/buy/LOAD_PODCAST_SUCCESS';

export function loadPodcast(id) {
  return {
    type: LOAD_PODCAST,
    id,
  };
}

export function podcastLoaded(podcast) {
  return {
    type: LOAD_PODCAST_SUCCESS,
    podcast,
  };
}
