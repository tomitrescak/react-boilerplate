import React from 'react';
import styled from 'styled-components';

// import { defaultTheme } from 'themes/default';

export const LayersContainer = styled.div`
  width: 300px;
  max-height: 60vh;
  background-color: blue;
  /* background-color: pink;  ${props => props.theme.paneBackground}; */
  display: flex;
  flex-direction: column;
`;

const MM = styled.div`
  background-color: red;
  font-size: 30px;
`;

export const LayersContainer2 = () => (
  <LayersContainer>
    <MM>Tototto</MM>
  </LayersContainer>
);

// LayersContainer.defaultProps = { theme: defaultTheme };
