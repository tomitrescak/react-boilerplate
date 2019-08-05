import React from 'react';
import { defaultTheme } from 'themes/default';

const context = {
  theme: defaultTheme
};

export const Context = React.createContext(context);
