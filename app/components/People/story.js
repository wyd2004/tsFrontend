import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Album from './index';

storiesOf('Album', module)
  .add('new', () => (
    <Album isNew />
  ))
  .add('normal', () => (
    <Album />
  ));
