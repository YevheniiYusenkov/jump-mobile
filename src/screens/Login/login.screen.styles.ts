import { StyleSheet } from 'react-native';

import { CommonColors, CommonFontSizes, CommonFontWeights, CommonStyles } from '@jump/common';

export const LoginScreenStyles = StyleSheet.create({
	Container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		color: '#ffcc00',
		...CommonStyles.Background,
	},
	FooterText: {
		fontWeight: CommonFontWeights.Regular,
		position: 'absolute',
		marginBottom: 30,
		bottom: 0,
	},
	LogoText: {
		color: CommonColors.Secondary,
		fontWeight: CommonFontWeights.Bold,
		fontSize: CommonFontSizes.Medium,
		marginBottom: 10,
	},
});
