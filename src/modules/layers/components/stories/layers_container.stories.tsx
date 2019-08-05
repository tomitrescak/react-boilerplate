import React from 'react';

import { action } from '@storybook/addon-actions';
import { ToolsContainer } from '../tools_container';
import { LayersContainer } from '../layers_container';

import marked from 'marked';

const docs = `
The layer container is one of the core system components, allowing user to display and manipulate layers. 
`;

export default {
  title: 'Components|Layers/Container',
  parameters: {
    component: ToolsContainer,
    info: marked(docs)
  }
};

export const DefaultView = () => <LayersContainer />;

DefaultView.story = {
  name: 'default'
};
