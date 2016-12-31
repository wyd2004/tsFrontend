export const LOAD_ALBUM = 'app/Subscription/LOAD_ALBUM';
export const LOAD_ALBUM_SUCCESS = 'app/Subscription/LOAD_ALBUM_SUCCESS';

export function loadAlbum(page = 1) {
  return {
    type: LOAD_ALBUM,
    page,
  };
}
export function albumLoaded(albums, next) {
  return {
    type: LOAD_ALBUM_SUCCESS,
    albums,
    next,
  };
}
