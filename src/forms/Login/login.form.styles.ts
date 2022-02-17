import { StyleSheet } from 'react-native';

export const LoginFormStyles = (styles: any) =>
	StyleSheet.create({
		Container: {
			...styles.FormContainer,
		},
		ButtonsContainer: {
			marginTop: 12,
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
