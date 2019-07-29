import { configure } from '@storybook/react';

import { addDecorator } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import { languageDecorator } from './i18decorator';

const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);

addDecorator(
  withInfo({
    inline: true,
    header: false
  })
);
addDecorator(languageDecorator);
addDecorator(withA11y);
addDecorator(withKnobs);
