import { createContext } from 'react';
import { ThemeContextInterface } from './theme.context.interface';
import { LightTheme } from '@jump/themes';

export const ThemeContext = createContext<ThemeContextInterface>({ theme: LightTheme });
