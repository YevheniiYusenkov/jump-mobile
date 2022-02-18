import { StyleSheet } from 'react-native';

import { Theme } from '@jump/themes';

export interface ButtonStylesInterface {
	Button: {
		[property: string]: unknown,
	},
	Text: {
		[property: string]: unknown,
	},
}

export const ButtonStylesCommon = ({ font: { weight, size } }: Theme, left?: boolean, right?: boolean) =>
	StyleSheet.create({
		Button: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexShrink: 1,
			marginTop: 12,
			marginLeft: (right) ? 4 : 0,
			marginRight: (left) ? 4 : 0,
			width: '100%',
			maxHeight: 50,
			minHeight: 50,
			borderRadius: 15,
		},
		Text: {
			display: 'flex',
			fontWeight: weight.Bold,
			fontSize: size.Normal,
		},
});

export const ButtonStylesDefault = (styles: any, colors: Theme['colors']) =>
	StyleSheet.create({
		Button: {
			backgroundColor: colors.Secondary,
			paddingTop: 12,
			paddingBottom: 12,
			paddingLeft: 24,
			paddingRight: 24,
			...styles.Button,
		},
		Text: {
			textAlign: 'center',
			color: colors.Primary,
		},
	});

export const ButtonStylesOutlined = (styles: any, colors: Theme['colors']) =>
	StyleSheet.create({
		Button: {
			backgroundColor: colors.Transparent,
			paddingTop: 9,
			paddingBottom: 9,
			paddingLeft: 21,
			paddingRight: 21,
			borderWidth: 3,
			borderColor: colors.Secondary,
			...styles.Button,
		},
		Text: {
			textAlign: 'center',
			color: colors.Secondary,
		},
	});
