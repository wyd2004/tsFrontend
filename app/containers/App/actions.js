/*
 *
 * global actions
 *
 */

/* 通知栏（Alert、Notification）的相关actions */
export const SHOW_DIALOG = 'app/global/SHOW_DIALOG';
export const HIDE_DIALOG = 'app/global/HIDE_DIALOG';
export const DIALOG_TYPE = {
  success: 'global/dialog/success',
  info: 'global/dialog/info',
  error: 'global/dialog/error',
};

export const LOADING = 'app/global/LOADING';
export const LOADED = 'app/global/LOADED';

export const AUTH_ERROR = 'app/global/AUTH_ERROR';
export const FETCH_ACCESS_TOKEN = 'app/global/FETCH_ACCESS_TOKEN';
export const FETCH_ACCESS_TOKEN_SUCCESS = 'app/global/FETCH_ACCESS_TOKEN_SUCCESS';

export function loading(indentify) {
  return {
    type: LOADING,
    indentify,
  };
}

export function loaded(indentify) {
  return {
    type: LOADED,
    indentify,
  };
}


export function showDialog(dialogType, message) {
  return {
    type: SHOW_DIALOG,
    dialogType,
    message,
  };
}

export function authError(from) {
  return {
    type: AUTH_ERROR,
    from,
  };
}


export function fetchAccessToken(code) {
  return {
    type: FETCH_ACCESS_TOKEN,
    code,
  };
}


export function fetchAccessTokenSuccess(userData) {
  return {
    type: FETCH_ACCESS_TOKEN_SUCCESS,
    userData,
  };
}
