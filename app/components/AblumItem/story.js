import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ListItem from './index';

storiesOf('ListItem', module)
    .add('Item', () => (
      <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
    ));
