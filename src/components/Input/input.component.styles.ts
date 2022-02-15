import { StyleSheet } from 'react-native';

import { Colors, CommonStyles, FontSizes } from '@jump/common';

export const InputStyles = StyleSheet.create({
	TextInput: {
		display: 'flex',
		color: Colors.Text,
		backgroundColor: Colors.Primary,
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 24,
		paddingRight: 24,
		marginTop: 12,
		maxHeight: 50,
		minHeight: 50,
		fontSize: FontSizes.Normal,
		width: '100%',
		...CommonStyles.Rounded,
	},
});
