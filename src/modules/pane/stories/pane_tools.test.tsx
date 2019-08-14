import { render } from 'react-test-renderer';

import { DefaultView } from './pane_tools.stories';

describe('Tools View', () => {
  const setTool = jest.fn();
  const tree = renderer.create(DefaultView(setTool));

  it('renders default', () => {
    expect(tree).toMatchSnapshot();
  });

  it('selects another item and calls a callback function', () => {
    const fakeEvent = {
      currentTarget: {
        hasAttribute: () => true,
        getAttribute: () => 'edit'
      }
    };
    tree.root.findByProps({ 'data-tool': 'edit' }).props.onClick(fakeEvent);
    expect(tree).toMatchSnapshot();
    expect(setTool).toHaveBeenCalledWith('edit');
  });
});
