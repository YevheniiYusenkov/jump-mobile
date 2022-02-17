import { Dispatch, SetStateAction } from 'react';
import { Theme } from '@jump/themes';

export interface ThemeContextInterface {
	theme: Theme,
	setTheme?: Dispatch<SetStateAction<Theme>>
}
