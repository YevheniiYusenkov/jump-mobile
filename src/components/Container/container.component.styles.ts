import { StyleSheet } from 'react-native';

import { Theme } from '@jump/themes';
import { ContainerType } from '@jump/components';

export const ContainerComponentStyles = ({ colors }: Theme, type: ContainerType) => {
	return StyleSheet.create({
		Container: {
			flex: 1,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			backgroundColor: (type === ContainerType.Colored) ? colors.Secondary : colors.Background,
			width: '100%',
		},
		FormContainer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			marginTop: 12,
			marginBottom: 12,
			backgroundColor: colors.Transparent,
			width: '90%',
		},
		KeyboardAvoiding: {
			flex: 1,
		},
		ButtonsContainer: {
			marginTop: 12,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'row',
			width: '100%',
		},
	});
};
