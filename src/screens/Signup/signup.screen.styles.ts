import { StyleSheet, Dimensions } from 'react-native';

import { Theme } from '@jump/themes';

const screenWidth = Dimensions.get('window').width;

export const SignupScreenStyles = ({ colors, font: { weight } }: Theme, styles: any) =>
	StyleSheet.create({
		Container: {
			...styles.PrimaryScreenContainer,
		},
		ScrollContainer: {
			display: 'flex',
			flexDirection: 'column',
			width: screenWidth,
			backgroundColor: colors.Transparent,
		},
		ScrollContainerFlex: {
			justifyContent: 'center',
			alignItems: 'center',
		},
		Logo: {
			marginTop: 35,
		},
		Form: {
			marginBottom: 50,
		},
		FooterText: {
			fontWeight: weight.Regular,
			color: colors.TextSecondary,
			marginBottom: 30,
		},
	});
