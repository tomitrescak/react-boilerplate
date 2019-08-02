import React from 'react';

import { text } from '@storybook/addon-knobs';

import Button from '../button';

import ButtonDocs from './button.docs.md';
import ButtonStory from './button.stories.md';

export default {
  title: 'Components/Button',
  parameters: {
    // info: 'Global story text',
    readme: {
      // Show readme before story
      content: ButtonStory,
      // Show readme at the addons panel
      sidebar: ButtonDocs
    }
  }
};

export const WithText = () => <Button content={text('Content', 'I am fancy!!!!!!!!')} />;

WithText.story = {
  name: 'with text 1',
  parameters: {
    readme: {
      content: `Overriden 1`,
      sidebar: `Overriden 2`
    }
  }
};

export const WithSomeEmoji = () => <Button content={text('Content', '😀 😎 👍 💯')} />;

WithSomeEmoji.story = {
  name: 'with some emoji'
};
