/*
 *
 * IndexPage actions
 *
 */

export const LOAD_PODCAST = 'app/IndexPage/LOAD_PODCAST';
export const LOAD_PODCAST_SUCCESS = 'app/IndexPage/LOAD_PODCAST_SUCCESS';
export const LOAD_ALBUM = 'app/IndexPage/LOAD_ALBUM_SUCCESS';
export const LOAD_ALBUM_SUCCESS = 'app/IndexPage/LOAD_ALBUM_SUCCESS';

export function loadPodcast(page = 0) {
  return {
    type: LOAD_PODCAST,
    page,
  };
}

export function loadAlbum(page = 0) {
  return {
    type: LOAD_ALBUM,
    page,
  };
}

export function podcastLoaded(podcasts, more) {
  return {
    type: LOAD_PODCAST_SUCCESS,
    podcasts,
    more,
  };
}

export function ablumLoaded(ablums, more) {
  return {
    type: LOAD_ALBUM_SUCCESS,
    ablums,
    more,
  };
}
