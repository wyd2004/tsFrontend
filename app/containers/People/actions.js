export const LOAD_PEOPLE = 'app/People/LOAD_PEOPLE';
export const LOAD_PEOPLE_SUCCESS = 'app/People/LOAD_PEOPLE_SUCCESS';
export const LOAD_PEOPLE_PODCASTS = 'app/People/LOAD_PEOPLE_PODCASTS';
export const LOAD_PEOPLE_PODCASTS_SUCCESS = 'app/People/LOAD_PEOPLE_PODCASTS_SUCCESS';

export function loadPeople(id) {
  return {
    type: LOAD_PEOPLE,
    id,
  };
}
export function peopleLoaded(result) {
  return {
    type: LOAD_PEOPLE_SUCCESS,
    result,
  };
}
export function loadPodcast(id) {
  return {
    type: LOAD_PEOPLE_PODCASTS,
    id,
  };
}
export function podcastLoaded(result) {
  return {
    type: LOAD_PEOPLE_PODCASTS_SUCCESS,
    result,
  };
}