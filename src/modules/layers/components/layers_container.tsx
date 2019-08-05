import React from 'react';
import { styled, theme } from 'config/common';
import { LayersTabs } from './layers_tabs';
import { ToolsContainer } from './tools_container';

export const LayersWrapper = styled.div`
  width: 300px;
  max-height: 60vh;
  background: ${theme.paneBackground};
  background-color: ${theme.paneBackground};
  display: flex;
  flex-direction: column;
  label: LayerContainer;
`;

LayersWrapper.displayName = 'LayersContainer';

const tabs = ['LAYERS', 'INDICATORS'];

export const LayersContainer = () => {
  const [tab, setTab] = React.useState(0);
  const stub: any = () => {};
  return (
    <LayersWrapper>
      <LayersTabs tabs={tabs} currentTab={tab} setTab={setTab} />
      <ToolsContainer setTool={stub} />
    </LayersWrapper>
  );
};
