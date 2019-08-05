import { configure } from '@storybook/react';

import { addDecorator } from '@storybook/react';

// import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
// import { addReadme } from 'storybook-readme';
import { i18Decorator } from './addon-i18n/decorator';

// const req = require.context('../src/components', true, /.stories.tsx$/);
// function loadStories() {
//   req.keys().forEach(req);
// }
// configure(loadStories, module);

configure(require.context('../src', true, /\.stories\.(js|ts|tsx|mdx)$/), module);

// addDecorator(
//   withInfo({
//     inline: true,
//     header: false
//   })
// );
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(i18Decorator);
// addDecorator(addReadme);
