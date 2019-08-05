import React from 'react';
import { action } from '@storybook/addon-actions';
import { LayersTabs } from '../layers_tabs';
import { array, number } from '@storybook/addon-knobs';
import { LayersWrapper } from '../layers_container';
import { Action } from 'config/common';

export default {
  title: 'Components|Layers/Tabs',
  parameters: {
    component: LayersTabs,
    // eslint-disable-next-line react/display-name
    decorators: [(storyFn: Function) => <LayersWrapper>{storyFn()}</LayersWrapper>]
  }
};

const storyProps = {
  setTab: action('setTab') as Action<number>
};

export const DefaultView = ({ setTab } = storyProps) => (
  <LayersTabs
    currentTab={number('ActiveTab', 0)}
    setTab={setTab}
    tabs={array('Tabs', ['LAYERS', 'INDICATORS'])}
  />
);

DefaultView.story = {
  name: 'first selected'
};

export const SelectedView = ({ setTab } = storyProps) => (
  <LayersTabs currentTab={1} setTab={setTab} tabs={['LAYERS', 'INDICATORS']} />
);

SelectedView.story = {
  name: 'second selected'
};
