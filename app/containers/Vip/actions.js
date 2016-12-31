export const LOAD_ALBUM = 'app/Vip/LOAD_ALBUM';
export const LOAD_ALBUM_SUCCESS = 'app/Vip/LOAD_ALBUM_SUCCESS';

export function loadVip(page = 1) {
  return {
    type: LOAD_ALBUM,
    page,
  };
}
export function vipLoaded(albums, next) {
  return {
    type: LOAD_ALBUM_SUCCESS,
    albums,
    next,
  };
}
