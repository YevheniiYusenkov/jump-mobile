import { DefaultTheme } from '@react-navigation/native';
import { Theme } from './theme.interface';

export const DarkTheme: Theme = {
	dark: true,
	colors: {
		Logo: '#000000',
		Primary: '#1f1f1f',
		Background: '#2c2c2c',
		Secondary: '#2255c7',
		Text: '#ffffff',
		TextSecondary: '#a9a9a9',
		Error: '#c92222',
		Success: '#50c937',
		Transparent: 'rgba(255, 255, 255, 0.0)',
		...DefaultTheme.colors,
	},
	font: {
		weight: {
			ExtraLight: '100',
			Light: '300',
			Regular: '600',
			Bold: '900',
		},
		size: {
			ExtraSmall: 11,
			Normal: 14,
			Medium: 20,
			Large: 24,
			ExtraLarge: 32,
		},
	},
};
