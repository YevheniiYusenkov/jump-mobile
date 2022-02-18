import { StyleSheet } from 'react-native';

import { Theme } from '@jump/themes';

export const SignupScreenStyles = ({ colors, font: { weight } }: Theme) =>
	StyleSheet.create({
		Logo: {
			marginTop: 35,
		},
		Form: {
			marginBottom: 50,
		},
		FooterText: {
			color: colors.TextSecondary,
			fontWeight: weight.Regular,
			position: 'absolute',
			marginBottom: 30,
			bottom: 0,
		},
	});
