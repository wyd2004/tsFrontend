import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories');
}

window.COLOR_1 = '#ff7575';
window.COLOR_2 = '#5f5f5f';
window.COLOR_3 = '#a2a2a2';
window.COLOR_4 = '#f6f6f6';

configure(loadStories, module);
