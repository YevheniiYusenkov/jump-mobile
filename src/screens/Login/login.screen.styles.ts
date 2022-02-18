import { StyleSheet } from 'react-native';

import { Theme } from '@jump/themes';

export const LoginScreenStyles = ({ colors, font: { weight, size } }: Theme) =>
	StyleSheet.create({
		FooterText: {
			color: colors.TextSecondary,
			fontWeight: weight.Regular,
			position: 'absolute',
			marginBottom: 30,
			bottom: 0,
		},
		LogoText: {
			color: colors.Text,
			fontWeight: weight.Bold,
			fontSize: size.Medium,
			marginBottom: 10,
		},
	});
