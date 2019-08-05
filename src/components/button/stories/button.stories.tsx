import React from 'react';

import { text } from '@storybook/addon-knobs';

import Button from '../button';

export default {
  title: 'Demo|Components/Button Classic',
  parameters: {
    component: Button,
    // info: 'Global story text',
    readme: {
      // Show readme before story
      content: 'Base 1',
      // Show readme at the addons panel
      sidebar: 'Base 2'
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
