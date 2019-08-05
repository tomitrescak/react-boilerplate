// import baseStyled from '@emotion/styled/macro';
// import { defaultTheme } from '../themes/default';

// styleed components

// export { css } from 'emotion';
// export type Theme = typeof defaultTheme;
// export const styled = baseStyled; // as ThemedStyledInterface<Theme>;
export { defaultTheme as theme } from '../themes/default';

export { styled } from './styling';

// classnames
export { default as classes } from 'classnames';

// types

export type Action<T> = (param: T) => void;
export type Func<T, U> = (param: T) => U;

// dom

export function stringAttribute(e: HTMLElement, name: string): string {
  if (!e.hasAttribute(name)) {
    throw new Error(`Element does not hava an attribute: ${name}`);
  }
  return e.getAttribute(name) as string;
}

export function numberAttribute(e: HTMLElement, name: string): number {
  if (!e.hasAttribute(name)) {
    throw new Error(`Element does not hava an attribute: ${name}`);
  }
  const result = parseFloat(e.getAttribute(name) as string);
  if (isNaN(result)) {
    throw new Error(`Attribute '${result}' is not a number`);
  }
  return result;
}
