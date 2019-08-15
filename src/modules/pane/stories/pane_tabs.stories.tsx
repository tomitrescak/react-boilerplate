import React from 'react';
import { action } from '@storybook/addon-actions';
import { PaneTabs } from '../pane_tabs';
import { array } from '@storybook/addon-knobs';
import { PaneContainer } from '../pane_container';
import { Action, styled } from 'config/common';

export default {
  title: 'Components|Pane/Tabs',
  parameters: {
    component: PaneTabs,
    // eslint-disable-next-line react/display-name
    decorators: [(storyFn: Function) => <PaneContainer>{storyFn()}</PaneContainer>]
  }
};

const Tab = styled.div`
  padding: 6px;
  color: white;
`;

const storyProps = {
  setTab: action('setTab') as Action<number>
};

export const DefaultView = ({ setTab } = storyProps) => (
  <PaneTabs tabs={array('Tabs', ['LAYERS', 'INDICATORS'])}>
    <Tab>Layers view</Tab>
    <Tab>Indicators view</Tab>
  </PaneTabs>
);

DefaultView.story = {
  name: 'first selected'
};
