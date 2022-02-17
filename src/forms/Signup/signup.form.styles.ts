import { StyleSheet } from 'react-native';

import { CommonStyles } from '@jump/common';
import { Theme } from '@jump/themes';

export const SignupFormStyles = ({ colors }: Theme) => {
	const styles = CommonStyles(colors);

	return StyleSheet.create({
		Container: {
			...styles.FormContainer,
		},
		Button: {
			marginTop: 24,
		},
	});
};
