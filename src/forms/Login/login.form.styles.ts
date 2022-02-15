import { StyleSheet } from 'react-native';

export const LoginFormStyles = StyleSheet.create({
	LoginForm: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: 12,
		marginBottom: 12,
		width: '80%',
	},
	LoginFormButtons: {
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
