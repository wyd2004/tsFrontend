/*
 *
 * IndexPage actions
 *
 */

export const SEARCH = 'app/SearchPage/SEARCH';
export const SEARCH_SUCCESS = 'app/SearchPage/SEARCH_SUCCESS';

export function searchPodcast(content) {
  return {
    type: SEARCH,
    content,
  };
}
export function searchResult(result) {
  return {
    type: SEARCH_SUCCESS,
    result,
  };
}
