export const LOAD_ABLUM_INFO = 'app/Special/LOAD_ABLUM_INFO';
export const LOAD_ABLUM_INFO_SUCCESSED = 'app/Special/LOAD_ABLUM_INFO_SUCCESSED';

export function loadInfo(id) {
  return {
    type: LOAD_ABLUM_INFO,
    id,
  };
}
export function loaded(info, podcast) {
  return {
    type: LOAD_ABLUM_INFO_SUCCESSED,
    info,
    podcast,
  };
}
