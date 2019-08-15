/* eslint-disable react/display-name */
import { render } from '@testing-library/react';
import React from 'react';

jest.mock('../../pane_tabs', () => ({
  LayersTabs: () => <div>Tabs</div>
}));

jest.mock('../../pane_container', () => ({
  PaneContainer: () => <div>Tools</div>
}));

import { DefaultView } from './layers_container.stories';

describe('Tools View', () => {
  const tree = render(DefaultView());

  it('renders default', () => {
    expect(tree.container).toMatchSnapshot();
  });
});
