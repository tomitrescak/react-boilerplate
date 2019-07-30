import React from 'react';

import addons from '@storybook/addons';

import { ADDON_ID } from './shared';
import i18n from '../../config/i18n';

export class i18DecoratorClass extends React.Component {
  changeLanguage(language) {
    i18n.changeLanguage(language);
  }
  componentWillMount() {
    const channel = addons.getChannel();
    channel.on(`${ADDON_ID}/changeLanguage`, this.changeLanguage);
  }

  componentWillUnmount() {
    const channel = addons.getChannel();
    channel.on(`${ADDON_ID}/changeLanguage`, this.changeLanguage);
  }

  render() {
    return this.props.story();
  }
}

export const i18Decorator = story => React.createElement(i18DecoratorClass, { story });
