import { StyleSheet } from 'react-native';

import { Colors, FontSizes, FontWeights, CommonStyles } from '@jump/common';

export const LoginScreenStyles = StyleSheet.create({
	Container: {
		...CommonStyles.ScreenContainer,
	},
	FooterText: {
		fontWeight: FontWeights.Regular,
		position: 'absolute',
		marginBottom: 30,
		bottom: 0,
	},
	LogoText: {
		color: Colors.Secondary,
		fontWeight: FontWeights.Bold,
		fontSize: FontSizes.Medium,
		marginBottom: 10,
	},
});
