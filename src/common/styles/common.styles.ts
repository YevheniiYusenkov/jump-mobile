import { StyleSheet } from 'react-native';

import { Colors } from './common.colors';

export const CommonStyles = StyleSheet.create({
  ScreenContainer: {
	  flex: 1,
	  display: 'flex',
	  justifyContent: 'center',
	  alignItems: 'center',
	  flexDirection: 'column',
	  color: '#ffcc00',
		backgroundColor: Colors.Background,
  },
	Text: {
		color: Colors.Text,
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
		width: '80%',
	},
});
