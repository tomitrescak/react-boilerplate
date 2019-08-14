import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';

import { DefaultView, SelectedView } from './pane_tabs.stories';

describe('Layer Tabs', () => {
  it('renders default', () => {
    const tree = render(DefaultView({ setTab: jest.fn() }));
    expect(tree).toMatchSnapshot();
  });

  it('changes active tab by index', () => {
    const { getByText, container } = render(SelectedView({ setTab: jest.fn() }));
    expect(getByText('LAYERS')).toHaveClass('active');
    expect(container).toMatchSnapshot();
  });

  it('calls the change tab function', () => {
    const setTab = jest.fn();
    const { getByText } = render(SelectedView({ setTab }));

    fireEvent.click(getByText('INDICATORS'));

    expect(setTab).toHaveBeenCalledWith(1);
  });
});
