/*
 *
 * IndexPage actions
 *
 */

export const SEARCH = 'app/SearchPage/SEARCH';
export const SEARCH_SUCCESS = 'app/SearchPage/SEARCH_SUCCESS';
export const SEARCH_ERROR = 'app/SearchPage/SEARCH_ERROR';

export function searchPodcast(content) {
  return {
    type: SEARCH,
    playload: {
      content,
    },
  };
}
export function getSearchResult(result) {
  return {
    type: SEARCH_SUCCESS,
    result,
  };
}
