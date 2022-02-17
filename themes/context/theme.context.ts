import { createContext, useContext } from 'react';

import { LightTheme } from '@jump/themes';

import { ThemeContextInterface } from './theme.context.interface';

const ThemeContext = createContext<ThemeContextInterface>({ theme: LightTheme });

export const useTheme = (): ThemeContextInterface => useTheme();
