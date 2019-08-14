// types

export type Action<T> = (param: T) => void;
export type Func<T, U> = (param: T) => U;

// styles

export { defaultTheme as theme } from '../themes/default';
import { styled as debugStyled } from './styling';
import styledEmotion from '@emotion/styled';

export const styled = process.env.NODE_ENV === 'development' ? debugStyled : styledEmotion;

// hooks

export { useMergeState } from './hooks';

// classnames

export { default as classes } from 'classnames';

// dom

export { numberAttribute, stringAttribute } from './dom';
