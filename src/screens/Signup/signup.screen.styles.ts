import { StyleSheet, Dimensions } from 'react-native';

import { Colors, CommonStyles, FontWeights } from '@jump/common';

const screenWidth = Dimensions.get('window').width;

export const SignupScreenStyles = StyleSheet.create({
	Container: {
		...CommonStyles.ScreenContainer,
	},
	ScrollContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: screenWidth,
		backgroundColor: Colors.Transparent,
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
		fontWeight: FontWeights.Regular,
		marginBottom: 30,
	},
});
