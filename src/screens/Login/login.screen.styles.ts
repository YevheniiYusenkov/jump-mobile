import { StyleSheet } from 'react-native';

import { CommonStyles } from '@jump/common';

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
	LoginForm: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: 12,
		marginBottom: 12,
		width: '80%',
	},
});
