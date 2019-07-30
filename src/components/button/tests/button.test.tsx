import renderer from 'react-test-renderer';
import React from 'react';

import { Button } from '../button';

describe('Button', () => {
  it('Renders with text', () => {
    const tree = renderer.create(<Button content="My Button" />);
    expect(tree).toMatchSnapshot();
  });
});
