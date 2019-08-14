import React from 'react';
import { action } from '@storybook/addon-actions';
import { PaneTabs } from '../pane_tabs';
import { array, number } from '@storybook/addon-knobs';
import { PaneContainer } from '../pane_container';
import { Action } from 'config/common';

export default {
  title: 'Components|Pane/Tabs',
  parameters: {
    component: PaneTabs,
    // eslint-disable-next-line react/display-name
    decorators: [(storyFn: Function) => <PaneContainer>{storyFn()}</PaneContainer>]
  }
};

const storyProps = {
  setTab: action('setTab') as Action<number>
};

export const DefaultView = ({ setTab } = storyProps) => (
  <PaneTabs
    currentTab={number('ActiveTab', 0)}
    setTab={setTab}
    tabs={array('Tabs', ['LAYERS', 'INDICATORS'])}
  />
);

DefaultView.story = {
  name: 'first selected'
};

export const SelectedView = ({ setTab } = storyProps) => (
  <PaneTabs currentTab={1} setTab={setTab} tabs={['LAYERS', 'INDICATORS']} />
);

SelectedView.story = {
  name: 'second selected'
};
