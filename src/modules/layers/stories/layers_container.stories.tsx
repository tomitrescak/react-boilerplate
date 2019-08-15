import React from 'react';

import marked from 'marked';
import { LayersContainer } from '../layers_container';

const docs = `
The layer container is one of the core system components, allowing user to display and manipulate layers. 
`;

export default {
  title: 'Components|Layers/Container',
  parameters: {
    component: LayersContainer,
    info: marked(docs)
  }
};

export const DefaultView = () => <LayersContainer groups={[[]]} openComments={null} />;

DefaultView.story = {
  name: 'default'
};
