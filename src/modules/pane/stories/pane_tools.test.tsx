import { render, fireEvent } from '@testing-library/react';

import { DefaultView } from './pane_tools.stories';

describe('Tools View', () => {
  const setTool = jest.fn();

  it('renders default', () => {
    const { container } = render(DefaultView(setTool));
    expect(container).toMatchSnapshot();
  });

  it('selects another item and calls a callback function', () => {
    const { getByTitle } = render(DefaultView(setTool));
    fireEvent.click(getByTitle('edit'));
    expect(getByTitle('edit')).toHaveClass('active');
    expect(setTool).toHaveBeenCalledWith('edit');
  });
});
