import React from 'react';
import styled from 'styled-components';

import i18n from 'i18next';
// import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '../src/i18n/en/translation.json';
import it from '../src/i18n/it/translation.json';

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources: {
      en,
      it
    },
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

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

export const languageDecorator = story => {
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return React.createElement(
    React.Fragment,
    {},
    story(),
    React.createElement(
      Languages,
      {},
      'locale: ',
      React.createElement(Language, { onClick: () => changeLanguage('en') }, 'en'),
      ' / ',
      React.createElement(Language, { onClick: () => changeLanguage('it') }, 'it')
    )
  );
};
