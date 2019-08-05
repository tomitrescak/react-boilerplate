import { css } from 'emotion';
import React from 'react';
import { default as styledBase } from '@emotion/styled';

// much simplified version of styled components

function init(element: string) {
  return function(...values: any[]): React.FC {
    const style = css(...values);
    // eslint-disable-next-line react/display-name
    return function(props: any) {
      return React.createElement(
        element,
        { ...props, className: style + (props.className ? ' ' + props.className : '') },
        props.children
      );
    };
  };
}

// we do all this madness as we want to get rid of unnecessary contexts
// once we switch to theming, we can get rid of it, but until then this will
// provide us a nice debugging experience

export const styled: typeof styledBase = {
  img: init('img'),
  ul: init('ul'),
  li: init('li'),
  div: init('div'),
  button: init('button'),
  a: init('a'),
  span: init('span')
} as any;
