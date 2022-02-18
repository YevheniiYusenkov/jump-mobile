import * as React from 'react';

import { createContext, useContext, useState } from 'react';

import { Language, Russian, Ukrainian } from '@jump/languages';

import { LanguageContextInterface } from './language.context.interface';

export const LanguageContext = createContext<LanguageContextInterface>({ strings: Russian });

export const LanguageProvider = ({ children }: any) => {
	const [ strings, setLanguage ] = useState<Language>(Ukrainian);

	return (
		<LanguageContext.Provider value={{ strings, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = (): LanguageContextInterface => useContext(LanguageContext);
