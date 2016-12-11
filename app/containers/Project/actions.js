/*
 *
 * IndexPage actions
 *
 */

export const LOAD_PROJECT = 'app/Project/LOAD_PROJECT';
export const LOAD_PROJECT_SUCCESS = 'app/Project/LOAD_PROJECT_SUCCESS';

export function loadProject() {
  return {
    type: LOAD_PROJECT,
  };
}
export function projectLoaded(results) {
  return {
    type: LOAD_PROJECT_SUCCESS,
    results,
  };
}
