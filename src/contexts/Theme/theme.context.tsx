import * as React from 'react';

import { createContext, useContext, useState } from 'react';

import { LightTheme, Theme } from '@jump/themes';

import { ThemeContextInterface } from './theme.context.interface';

export const ThemeContext = createContext<ThemeContextInterface>({ theme: LightTheme });

export const ThemeProvider = ({ children }: any) => {
	const [ theme, setTheme ] = useState<Theme>(LightTheme);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextInterface => useContext(ThemeContext);
