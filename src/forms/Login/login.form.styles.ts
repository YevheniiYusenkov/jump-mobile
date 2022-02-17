import { StyleSheet } from 'react-native';

import { CommonStyles } from '@jump/common';
import { Theme } from '@jump/themes';

export const LoginFormStyles = ({ colors }: Theme) => {
	const styles = CommonStyles(colors);

	return StyleSheet.create({
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
};
