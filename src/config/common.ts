// types

export type Action<T> = (param: T) => void;
export type Func<T, U> = (param: T) => U;

// styles

export { defaultTheme as theme } from '../themes/default';
export { styled } from './styling';

// hooks

export { useMergeState } from './hooks';

// classnames

export { default as classes } from 'classnames';

// dom

export { numberAttribute, stringAttribute } from './dom';
