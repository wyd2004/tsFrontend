/*
 *
 * IndexPage actions
 *
 */

export const CHANGE_LIST = 'app/IndexPage/CHANGE_LIST';
export const LOAD_PODCAST_SUCCESS = 'app/IndexPage/LOAD_PODCAST_SUCCESS';
export const LOAD_ALBUM_SUCCESS = 'app/IndexPage/LOAD_ALBUM_SUCCESS';

export const CURRENT_TYPE = {
  PODCAST: 'index/currentType/poadcast',
  ALBUM: 'index/currentType/album',
};

export function changeList(currentType) {
  return {
    type: CHANGE_LIST,
    currentType,
  };
}

export function loadPodcast() {
  return {
    type: LOAD_PODCAST_SUCCESS,
  };
}

export function loadAlbum() {
  return {
    type: LOAD_ALBUM_SUCCESS,
  };
}
