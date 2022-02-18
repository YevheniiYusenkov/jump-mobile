import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'onPress'> {
	onSubmit: Function,
	handleSubmit?: Function,
	text: string,
	outlined?: boolean,
	left?: boolean,
	right?: boolean,
}
