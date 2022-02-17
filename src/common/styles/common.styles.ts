import { StyleSheet } from 'react-native';

import { Theme } from '@jump/themes';

const CommonUsages = StyleSheet.create({
	ScreenContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
});

export const CommonStyles = (colors: Theme['colors']) =>
	StyleSheet.create({
		KeyboardAvoidingContainer: {
			flex: 1,
		},
	  PrimaryScreenContainer: {
			backgroundColor: colors.Background,
		  ...CommonUsages.ScreenContainer,
	  },
		SecondaryScreenContainer: {
			backgroundColor: colors.Secondary,
			...CommonUsages.ScreenContainer,
		},
		Text: {
			color: colors.Text,
		},
		Rounded: {
			borderRadius: 15,
		},
		FormContainer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			marginTop: 12,
			marginBottom: 12,
			width: '90%',
		},
	});
