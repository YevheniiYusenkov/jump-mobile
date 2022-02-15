import { StyleSheet } from 'react-native';

import { CommonColors, CommonStyles } from '@jump/common';

export const InputComponentStyles = StyleSheet.create({
	TextInput: {
		display: 'flex',
		color: CommonColors.Text,
		backgroundColor: CommonColors.White,
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 24,
		paddingRight: 24,
		marginTop: 12,
		width: '100%',
		...CommonStyles.Rounded,
	},
});
