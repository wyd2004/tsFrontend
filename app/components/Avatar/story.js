import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Avatar from './index';

storiesOf('Avatar', module)
  .add('Avatar', () => (
    <Avatar isVip />
  ));
