import React from 'react';
import renderer from 'react-test-renderer';

import { DefaultView, SelectedView } from './layers_tabs.stories';

describe('Layer Tabs', () => {
  it('renders default', () => {
    const tree = renderer.create(DefaultView({ setTab: jest.fn() }));
    expect(tree).toMatchSnapshot();
  });

  it('changes active tab by index', () => {
    const tree = renderer.create(SelectedView({ setTab: jest.fn() }));
    expect(tree.root.findByProps({ 'data-tab': 1 }).props.className).toEqual('active');
    expect(tree).toMatchSnapshot();
  });

  it('calls the change tab function', () => {
    const setTab = jest.fn();
    const tree = renderer.create(SelectedView({ setTab }));

    const tabId = 3;
    const fakeEvent = {
      currentTarget: {
        hasAttribute: () => true,
        getAttribute: () => tabId
      }
    };
    tree.root.findByProps({ 'data-tab': 1 }).props.onClick(fakeEvent);

    expect(setTab).toHaveBeenCalledWith(tabId);
  });
});
