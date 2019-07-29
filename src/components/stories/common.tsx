import React from 'react';
import styled from 'styled-components';

import i18n from '../../i18n';
import { RenderFunction } from '@storybook/react';

const Languages = styled.div`
  margin-top: 20px;
  border-top: 1px dashed #ddd;
  padding: 6px;
  font-family: 'arial';
  font-size: 11px;
  color: #444;
`;

const Language = styled.span`
  cursor: pointer;
`;

export const languageDecorator = (story: RenderFunction) => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {story()}
      <Languages>
        locale:
        <Language onClick={() => changeLanguage('en')}>en</Language>
        {' / '}
        <Language onClick={() => changeLanguage('it')}>it</Language>
      </Languages>
    </>
  );
};
