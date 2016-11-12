import moment from 'moment';

export function convDate(date) {
  return moment(date).format('MM/DD/YYYY');
}

export function convAudioTime(time, separate = ':') {
  const timeInteger = parseInt(time, 10);
  let result;
  if (separate === ':') {
    result = `${parseInt(timeInteger / 60, 10)}${separate}${timeInteger % 60}`;
  } else if (separate === '\'') {
    result = `${parseInt(timeInteger / 60, 10)}${separate}${timeInteger % 60}${separate}${separate}`;
  } else {
    result = timeInteger;
  }
  return result;
}
