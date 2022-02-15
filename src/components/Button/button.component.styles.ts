import { StyleSheet } from 'react-native';

import { CommonColors, CommonFontSizes, CommonStyles } from '@jump/common';

export const ButtonComponentStyles = StyleSheet.create({
	TouchableOpacity: {
		display: 'flex',
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
