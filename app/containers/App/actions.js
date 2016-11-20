/*
 *
 * Global actions
 *
 */

export const SHOW_DIALOG = 'app/Global/SHOW_DIALOG';
export const HIDE_DIALOG = 'app/Global/HIDE_DIALOG';

export const DIALOG_TYPE = {
  loadding: 'global/dialog/loadding',
  failed: 'global/dialog/failed',
};

export function showDialog(dialogType, messages) {
  return {
    type: SHOW_DIALOG,
    dialogType,
    messages,
  };
}
