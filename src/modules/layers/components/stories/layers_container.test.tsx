/* eslint-disable react/display-name */

import React from 'react';

jest.mock('../layers_tabs', () => ({
  LayersTabs: () => <div>Tabs</div>
}));

jest.mock('../tools_container', () => ({
  ToolsContainer: () => <div>Tools</div>
}));

import renderer from 'react-test-renderer';

import { DefaultView } from './layers_container.stories';

describe('Tools View', () => {
  const tree = renderer.create(DefaultView());

  it('renders default', () => {
    expect(tree).toMatchSnapshot();
  });
});
