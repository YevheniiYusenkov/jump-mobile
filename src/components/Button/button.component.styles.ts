import { StyleSheet } from 'react-native';

import { Colors, FontSizes, FontWeights, CommonStyles } from '@jump/common';

export interface ButtonStylesInterface {
	Button: {
		[property: string]: unknown;
	};
	Text: {
		[property: string]: unknown;
	};
}

const ButtonStylesCommon = StyleSheet.create({
	Button: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexShrink: 1,
		marginTop: 12,
		width: '100%',
		maxHeight: 50,
		minHeight: 50,
		...CommonStyles.Rounded,
	},
	Text: {
		display: 'flex',
		fontSize: FontSizes.Normal,
	},
});

export const ButtonStylesDefault: ButtonStylesInterface = StyleSheet.create({
	Button: {
		backgroundColor: Colors.Dark,
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 24,
		paddingRight: 24,
		...ButtonStylesCommon.Button,
	},
	Text: {
		textAlign: 'center',
		color: Colors.White,
		...ButtonStylesCommon.Text,
	},
});

export const ButtonStylesOutlined: ButtonStylesInterface = StyleSheet.create({
	Button: {
		backgroundColor: Colors.Transparent,
		paddingTop: 9,
		paddingBottom: 9,
		paddingLeft: 21,
		paddingRight: 21,
		borderWidth: 3,
		...ButtonStylesCommon.Button,
	},
	Text: {
		textAlign: 'center',
		color: Colors.Text,
		fontWeight: FontWeights.Bold,
		...ButtonStylesCommon.Text,
	},
});
