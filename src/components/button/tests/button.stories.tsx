import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Button from '../button';

import ButtonDocs from './button.docs.md';
import ButtonStory from './button.stories.md';

storiesOf('Components/Button', module)
  // .addDecorator(languageDecorator)
  .addParameters({
    // info: 'Global story text',
    readme: {
      // Show readme before story
      content: ButtonStory,
      // Show readme at the addons panel
      sidebar: ButtonDocs
    }
  })
  .add('with text', () => <Button content={text('Content', 'I am fancy!!!!!!')} />, {
    readme: {
      content: `Overriden 1`,
      sidebar: `Overriden 2`
    }
  })
  .add('with some emoji', () => <Button content={text('Content', '😀 😎 👍 💯')} />);
