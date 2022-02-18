import { Dispatch, SetStateAction } from 'react';

import { Language } from '@jump/languages';

export interface LanguageContextInterface {
	strings: Language,
	setLanguage?: Dispatch<SetStateAction<Language>>
}
