import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'onPress'> {
	onSubmit: Function,
	handleSubmit?: Function,
	text: string,
}
