import React from 'react';

import { action } from '@storybook/addon-actions';
import { Story, Meta, Props, Source } from '@storybook/addon-docs/blocks';
import { text } from '@storybook/addon-knobs';
import { LayersTabs } from '../layers_tabs';
import { array, number } from '@storybook/addon-knobs';
import { ToolsContainer } from '../tools_container';
import { LayersWrapper } from '../layers_container';

export default {
  title: 'Components|Layers/Tools1',
  parameters: {
    component: ToolsContainer,
    // eslint-disable-next-line react/display-name
    decorators: [(storyFn: Function) => <LayersWrapper>{storyFn()}</LayersWrapper>]
    // info: 'Global story text',
  }
};

export const DefaultView = () => <ToolsContainer setTool={action('setTool')} />;

DefaultView.story = {
  name: 'default'
};
