import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Collection from './index';

const data = [
  {
    text: 'a',
  },
  {
    text: 'b',
  },
  {
    text: 'c',
  },
  {
    text: 'd',
  },
  {
    text: 'e',
  },
  {
    text: 'f',
  },
  {
    text: 'g',
  },
];

storiesOf('Collection', module)
  .add('avatar', () => (
    <Collection title={'已订阅节目'} type={'avatar'} data={data} />
  ))
  .add('album', () => (
    <Collection title={'主播电台'} type={'album'} data={data} />
  ));
