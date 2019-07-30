import React from 'react';
import { IconButton, Icons, TooltipLinkList, WithTooltip } from '@storybook/components';
import addons, { types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID, ADDON_TITLE } from './shared';

const locales = ['en', 'it'];

class LocaleSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      locales,
      activeLocale: locales[0],
      expanded: false
    };
  }

  render() {
    return this.renderLocaleSelector();
  }

  renderLocaleSelector() {
    const { locales, activeLocale, expanded } = this.state;
    const defaultLocale = this.getDefaultLocale(locales);
    const links = this.getLinks(locales);

    if (!activeLocale) {
      return false;
    }
    return React.createElement(
      WithTooltip,
      {
        placement: 'top',
        trigger: 'click',
        tooltipShown: expanded,
        onVisibilityChange: e => this.handleVisibilityChange(e),
        tooltip: React.createElement(TooltipLinkList, { links }),
        closeOnClick: true
      },
      React.createElement(
        IconButton,
        {
          key: 'background',
          active: activeLocale !== defaultLocale,
          title: 'Change the locale of the preview'
        },
        React.createElement(Icons, { icon: 'globe' })
      )
    );
  }

  getLinks(locales) {
    return locales.map(l => ({
      id: l,
      title: l,
      value: l,
      // next line fixes stupid storybook error passing loading=false to span el
      loading: null,
      onClick: () => this.getOnLinkSelected(l)
    }));
  }

  getOnLinkSelected(locale) {
    this.setState({
      expanded: false
    });
    this.changeLocale(locale);
  }

  handleVisibilityChange(newVisibility) {
    this.setState({ expanded: newVisibility });
  }

  changeLocale(locale) {
    this.props.api.emit(`${ADDON_ID}/changeLanguage`, locale);

    this.setState({
      activeLocale: locale
    });
  }

  getDefaultLocale(locales) {
    return locales[0];
  }
}

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.TOOL,
    title: ADDON_TITLE,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => React.createElement(LocaleSelector, { api })
  });
});
