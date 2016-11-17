import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CollectionItem from './index';

storiesOf('CollectionItem', module)
  .add('avatar', () => (
    <CollectionItem type={'avatar'} text={'宋冬野'} />
  ))
  .add('album', () => (
    <CollectionItem type={'album'} text={'宋冬野电台'} />
  ));
