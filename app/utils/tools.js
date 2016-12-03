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

export function getSearchObj(search) {
  const qs = search.length > 0 ? search.substr(1) : '';
  const args = {};
  const items = qs.length > 0 ? qs.split('&') : [];
  let item = null;
  let name = null;
  let value = null;
  const len = items.length;

  for (let i = 0; i < len; i += 1) {
    item = items[i].split('=');
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);

    if (name.length) {
      args[name] = value;
    }
  }

  return args;
}
