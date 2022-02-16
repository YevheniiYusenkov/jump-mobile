import { createContext } from 'react';

import { Theme, LightTheme } from '@jump/common';

export const ThemeContext = createContext<Theme>(LightTheme);
