import { StyleSheet } from 'react-native';

import { CommonColors, CommonFontSizes, CommonFontWeights, CommonStyles } from '@jump/common';

export interface ButtonStylesInterface {
	Button: {
		[property: string]: unknown;
	};
	Text: {
		[property: string]: unknown;
	};
}

export const ButtonStylesDefault: ButtonStylesInterface = StyleSheet.create({
	Button: {
		display: 'flex',
		flexShrink: 1,
		backgroundColor: CommonColors.Dark,
		marginTop: 12,
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 24,
		paddingRight: 24,
		width: '100%',
		...CommonStyles.Rounded,
	},
	Text: {
		textAlign: 'center',
		color: CommonColors.White,
		fontSize: CommonFontSizes.Middle,
	},
});

export const ButtonStylesOutlined: ButtonStylesInterface = StyleSheet.create({
	Button: {
		display: 'flex',
		flexShrink: 1,
		backgroundColor: CommonColors.Transparent,
		borderWidth: 3,
		marginTop: 12,
		paddingTop: 9,
		paddingBottom: 9,
		paddingLeft: 21,
		paddingRight: 21,
		width: '100%',
		...CommonStyles.Rounded,
	},
	Text: {
		textAlign: 'center',
		color: CommonColors.Text,
		fontSize: CommonFontSizes.Middle,
		fontWeight: CommonFontWeights.Bold,
	},
});
