import React from 'react';
import { styled, theme } from 'config/common';

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
