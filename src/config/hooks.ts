import React from 'react';

const { useState } = React;

export function useMergeState<T>(initialState: T): [T, (newState: Partial<T>) => void] {
  const [state, setState] = useState(initialState);
  const setMergedState = (newState: Partial<T>) =>
    setState(prevState => Object.assign({}, prevState, newState));
  return [state, setMergedState];
}
