import { StyleSheet } from 'react-native';
import { Theme } from '@jump/themes';

export const SelectStyles = ({ colors, font: { size } }: Theme, styles: any) =>
	StyleSheet.create({
		Container: {
			width: '100%',
			overflow: 'hidden',
			height: 50,
			marginTop: 12,
			backgroundColor: colors.Primary,
			...styles.Rounded,
		},
		Picker: {
			height: '100%',
			display: 'flex',
			width: '95%',
			marginLeft: 7,
			color: colors.Text,
			backgroundColor: colors.Primary,
		},
		Item: {
			fontSize: size.Normal,
		},
	});
