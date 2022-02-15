import { StyleSheet } from 'react-native';

import { CommonColors, CommonStyles } from '@jump/common';

export const InputComponentStyles = StyleSheet.create({
	TextInput: {
		color: CommonColors.Text,
		backgroundColor: CommonColors.White,
		padding: 12,
		width: '80%',
		...CommonStyles.Rounded,
	},
});
