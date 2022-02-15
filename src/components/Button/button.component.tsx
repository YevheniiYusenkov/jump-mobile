import * as React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { ButtonProps } from './button.component.interfaces';
import {
	ButtonStylesDefault,
	ButtonStylesOutlined,
} from './button.component.styles';

export const Button: React.FunctionComponent<ButtonProps> = (props): JSX.Element => {
	const { onSubmit, handleSubmit, style, text, ...otherProps } = props;

	const customStyles = (props.outlined) ? ButtonStylesOutlined : ButtonStylesDefault;

	return (
		<TouchableOpacity
			style={[ customStyles.Button, { ...(style as object) } ]}
			onPress={(handleSubmit) ? handleSubmit(onSubmit) : onSubmit}
			{...otherProps}
		>
			<Text style={customStyles.Text}>{text}</Text>
		</TouchableOpacity>
	);
};
