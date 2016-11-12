import moment from 'moment';

export function convDate(date) {
  return moment(date).format('MM/DD/YYYY');
}

export function convAudioTime(time, separate = ':') {
  let result;
  if (separate === ':') {
    result = `${parseInt(time / 60, 10)}${separate}${time % 60}`;
  } else if (separate === '\'') {
    result = `${parseInt(time / 60, 10)}${separate}${time % 60}${separate}${separate}`;
  } else {
    result = time;
  }
  return result;
}
