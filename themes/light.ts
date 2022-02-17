import { DefaultTheme } from '@react-navigation/native';
import { Theme } from './theme.interface';

export const LightTheme: Theme = {
	dark: false,
	colors: {
		Logo: '#ffffff',
		Primary: '#ffffff',
		Background: '#f1f2f5',
		Secondary: '#2255c7',
		Text: '#000000',
		TextSecondary: '#464646',
		Error: '#ef3232',
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
