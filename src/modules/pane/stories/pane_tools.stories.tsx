import React from 'react';

import { action } from '@storybook/addon-actions';
import { ToolsContainer } from '../pane_tools';
import { PaneContainer } from '../pane_container';

import docs from './pane_tools.docs.md';
import marked from 'marked';
import { Action } from 'config/common';

export default {
  title: 'Components|Pane/Tools',
  parameters: {
    component: ToolsContainer,
    info: marked(docs),
    // eslint-disable-next-line react/display-name
    decorators: [(storyFn: Function) => <PaneContainer>{storyFn()}</PaneContainer>]
  }
};

export const DefaultView = (setToolHandler?: Action<string>) => (
  <ToolsContainer setTool={setToolHandler || action('setTool')} />
);

DefaultView.story = {
  name: 'default'
};
