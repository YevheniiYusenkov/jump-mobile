import { StyleSheet } from 'react-native';
import { CommonStyles } from '@jump/common';

export const LoginFormStyles = StyleSheet.create({
	Container: {
		...CommonStyles.FormContainer,
	},
	ButtonsContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		width: '100%',
	},
	RequestButton: {
		marginRight: 4,
	},
	LoginButton: {
		marginLeft: 4,
	},
});
