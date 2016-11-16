import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Collection from './index';

storiesOf('CollectionItem', module)
  .add('avatar', () => (
    <Collection type={'avatar'} text={'宋冬野'} />
  ))
  .add('album', () => (
    <Collection type={'album'} text={'宋冬野电台'} />
  ));
