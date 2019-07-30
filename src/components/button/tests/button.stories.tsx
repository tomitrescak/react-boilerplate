import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withI18n } from 'storybook-addon-i18n';

import Button from '../button';

storiesOf('Components/Button', module)
  // .addDecorator(languageDecorator)
  .addDecorator(withI18n)
  .addParameters({
    info: 'Global story text'
  })
  .add('with text', () => <Button content={text('Content', 'I am fancy!!!!!!')} />, {
    info: `
      **This is some text**

      ~~~js
      <Button>Click Here</Button>
      ~~~
      `
  })
  .add('with some emoji', () => <Button content={text('Content', '😀 😎 👍 💯')} />);
