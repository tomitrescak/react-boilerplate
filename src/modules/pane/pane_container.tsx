import { styled, theme } from 'config/common';

export const PaneContainer = styled.div`
  width: 300px;
  max-height: 60vh;
  background: ${theme.paneBackground};
  background-color: ${theme.paneBackground};
  display: flex;
  flex-direction: column;
  label: LayerContainer;
`;

PaneContainer.displayName = 'PaneContainer';

// const tabs = ['LAYERS', 'INDICATORS'];

// export const PaneContainer = () => {
//   const [tab, setTab] = React.useState(0);
//   const stub: any = () => {};
//   return (
//     <LayersWrapper>
//       <PaneTabs tabs={tabs} currentTab={tab} setTab={setTab} />
//       <ToolsContainer setTool={stub} />
//     </LayersWrapper>
//   );
// };
