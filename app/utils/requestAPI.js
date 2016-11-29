import request from './request';

const HOST = '/api';
export default (url) =>
   request(`${HOST}${url}`)
;
