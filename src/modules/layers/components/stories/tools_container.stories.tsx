import React from 'react';

import { action } from '@storybook/addon-actions';
import { ToolsContainer } from '../tools_container';
import { LayersWrapper } from '../layers_container';

import docs from './tools_container.docs.md';
import marked from 'marked';
import { Action } from 'config/common';

export default {
  title: 'Components|Layers/Tools',
  parameters: {
    component: ToolsContainer,
    info: marked(docs),
    // eslint-disable-next-line react/display-name
    decorators: [(storyFn: Function) => <LayersWrapper>{storyFn()}</LayersWrapper>]
  }
};

const setTool = action('setTool') as Action<string>;

export const DefaultView = (setToolHandler = setTool) => (
  <ToolsContainer setTool={setToolHandler} />
);

DefaultView.story = {
  name: 'default'
};
