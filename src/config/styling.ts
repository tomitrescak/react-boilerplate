import { css } from 'emotion';
import React from 'react';

export function styled(element: string) {
  return function(...values: any[]) {
    const style = css(values);
    return React.createElement(element, {});
    return css(values);
  };
}
