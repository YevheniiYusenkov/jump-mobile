import { StyleSheet } from 'react-native';
import { Colors, CommonStyles, FontSizes } from '@jump/common';

export const SelectStyles = StyleSheet.create({
	Container: {
		width: '100%',
		overflow: 'hidden',
		height: 50,
		marginTop: 12,
		backgroundColor: Colors.Primary,
		...CommonStyles.Rounded,
	},
	Picker: {
		height: '100%',
		display: 'flex',
		width: '95%',
		marginLeft: 7,
		color: Colors.Text,
		backgroundColor: Colors.Primary,
	},
	Item: {
		fontSize: FontSizes.Normal,
	},
});
