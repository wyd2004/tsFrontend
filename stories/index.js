import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

// require('../app/components/ListItem/story');
require('../app/components/Avatar/story');
require('../app/components/Header/story');
require('../app/components/Album/story');
require('../app/components/CollectionItem/story');
require('../app/components/Collection/story');
