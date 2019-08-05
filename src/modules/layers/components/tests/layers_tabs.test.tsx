import React from 'react';
import renderer from 'react-test-renderer';

import { LayersTabs } from '../layers_tabs';

describe('Layer Tabs', () => {
  it('renders default', () => {
    const tree = renderer.create(
      <LayersTabs currentTab={0} setTab={jest.fn()} tabs={['LAYERS', 'INDICATORS']} />
    );
    expect(tree).toMatchSnapshot();
  });

  it('changes active tab by index', () => {
    const tree = renderer.create(
      <LayersTabs currentTab={1} setTab={jest.fn()} tabs={['LAYERS', 'INDICATORS']} />
    );
    expect(tree.root.findByProps({ 'data-tab': 1 }).props.className).toEqual('active');
    expect(tree).toMatchSnapshot();
  });

  it('calls the change tab function', () => {
    const setTab = jest.fn();
    const tree = renderer.create(
      <LayersTabs currentTab={1} setTab={setTab} tabs={['LAYERS', 'INDICATORS']} />
    );

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
