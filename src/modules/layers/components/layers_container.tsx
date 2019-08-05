import React from 'react';
import styled from 'styled-components';

import { defaultTheme } from 'themes/default';

export const LayersContainer = styled.div`
  width: 300px;
  max-height: 60vh;
  background-color: ${props => props.theme.paneBackground};
  display: flex;
  flex-direction: column;
`;

LayersContainer.displayName = 'LayersContainer';
LayersContainer.defaultProps = { theme: defaultTheme };
