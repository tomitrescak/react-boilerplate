import { render } from '@testing-library/react';
import React from 'react';

import { Button } from '../button';

describe('Button', () => {
  it.only('Renders with text', () => {
    const { container } = render(<Button content="My Button" />);
    expect(container).toMatchSnapshot();
  });
});
