import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Header from './index';

storiesOf('Header', module)
  .add('付费会员', () => (
    <Header isVip otherText={'2015-06-13'} isSelf userName={'xxxx'} toRenew={() => console.log(123)} />
  ))
  .add('非付费会员', () => (
    <Header isVip isSelf userName={'xxxx'} />
  ))
  .add('查看他人', () => (
    <Header isVip isSelf={false} userName={'xxxx'} />
  ));
