/* eslint-disable react/display-name */

import { render } from '@testing-library/react';

import { DefaultView } from './pane_container.stories';

describe('Tools View', () => {
  const { container } = render(DefaultView());

  it('renders default', () => {
    expect(container).toMatchSnapshot();
  });
});
