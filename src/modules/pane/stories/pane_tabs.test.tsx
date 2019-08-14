import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';

import { DefaultView, SelectedView } from './pane_tabs.stories';

describe('Layer Tabs', () => {
  it('renders default', () => {
    const { container } = render(DefaultView({ setTab: jest.fn() }));
    expect(container).toMatchSnapshot();
  });

  it('changes active tab by index', () => {
    const { getByText } = render(SelectedView({ setTab: jest.fn() }));
    expect(getByText('INDICATORS')).toHaveClass('active');
  });

  it('calls the change tab function', () => {
    const setTab = jest.fn();
    const { getByText } = render(SelectedView({ setTab }));

    fireEvent.click(getByText('INDICATORS'));
    expect(setTab).toHaveBeenCalledWith(1);
  });
});
