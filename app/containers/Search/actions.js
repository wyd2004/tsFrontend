/*
 *
 * IndexPage actions
 *
 */

export const SEARCH = 'app/SearchPage/SEARCH';
export const SEARCH_SUCCESS = 'app/SearchPage/SEARCH_SUCCESS';

export function searchPodcast(content, page = 1) {
  return {
    type: SEARCH,
    content,
    page,
  };
}
export function searchResult(results) {
  return {
    type: SEARCH_SUCCESS,
    results,
  };
}
