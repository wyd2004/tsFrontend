/*
 *
 * IndexPage actions
 *
 */

export const LOAD_PODCASTS = 'app/IndexPage/LOAD_PODCASTS';
export const LOAD_PODCASTS_SUCCESS = 'app/IndexPage/LOAD_PODCAST_SUCCESSS';
export const LOAD_ALBUMS = 'app/IndexPage/LOAD_ALBUMS';
export const LOAD_ALBUMS_SUCCESS = 'app/IndexPage/LOAD_ALBUMS_SUCCESS';

export function loadPodcast(page = 1) {
  return {
    type: LOAD_PODCASTS,
    page,
  };
}

export function loadAlbum(page = 1) {
  return {
    type: LOAD_ALBUMS,
    page,
  };
}

export function podcastLoaded({ results, next }) {
  return {
    type: LOAD_PODCASTS_SUCCESS,
    results,
    next,
  };
}

export function ablumLoaded({ results, next }) {
  return {
    type: LOAD_ALBUMS_SUCCESS,
    results,
    next,
  };
}
