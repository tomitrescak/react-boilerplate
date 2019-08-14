import React from 'react';

import { ToolsContainer } from '../pane_tools';
import { PaneContainer } from '../pane_container';

import marked from 'marked';
import { PaneTabs } from '../pane_tabs';
import { action } from '@storybook/addon-actions';

const docs = `
The layer container is one of the core system components, allowing user to display and manipulate layers. 
`;

export default {
  title: 'Components|Pane/Container',
  parameters: {
    component: ToolsContainer,
    info: marked(docs)
  }
};

export const DefaultView = () => <PaneContainer>This is some content</PaneContainer>;

DefaultView.story = {
  name: 'default'
};

const Story = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <PaneContainer>
      <PaneTabs setTab={setTab} currentTab={tab} tabs={['LAYERS', 'ACTIONS']} />
      <ToolsContainer setTool={action('setTool')} />
      <div style={{ padding: '6px', color: 'white' }}>
        {tab == 0 && <div>Tab LAYERS</div>}
        {tab == 1 && <div>Tab ACTIONS</div>}
      </div>
    </PaneContainer>
  );
};

// weird bug not allowing to render hooks directly in the story
// we just use a sub component
export const CompoundView = () => {
  return <Story />;
};

CompoundView.story = {
  name: 'compound view'
};
