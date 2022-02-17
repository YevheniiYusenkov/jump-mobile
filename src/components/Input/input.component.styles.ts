import { StyleSheet } from 'react-native';

import { Theme } from '@jump/themes';

export const InputCommonStyles = ({ colors, font: { size } }: Theme, styles: any,) =>
	StyleSheet.create({
		Container: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'row',
			width: '100%',
			maxHeight: 50,
			minHeight: 50,
			marginTop: 12,
			backgroundColor: colors.Transparent,
		},
		Input: {
			display: 'flex',
			color: colors.Text,
			backgroundColor: colors.Primary,
			paddingTop: 12,
			paddingBottom: 12,
			paddingRight: 24,
			fontSize: size.Normal,
			height: '100%',
			width: '100%',
			zIndex: 0,
			...styles.Rounded,
		},
	});

export const InputStyles = (styles: any) =>
	StyleSheet.create({
		Container: {
			...styles.Container,
		},
		Input: {
			paddingLeft: 24,
			...styles.Input,
		},
		Icon: {},
	});


export const InputStylesWithIcon = (styles: any) =>
	StyleSheet.create({
		Container: {
			...styles.Container,
		},
		Input: {
			paddingLeft: 54,
			...styles.Input,
		},
		Icon: {
			zIndex: 1,
			left: 23,
			position: 'absolute',
		},
	});
