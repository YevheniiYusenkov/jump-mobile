import * as React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { ButtonProps } from './button.component.interfaces';
import { ButtonComponentStyles } from './button.component.styles';

export const Button: React.FunctionComponent<ButtonProps> = (props): JSX.Element => {
	const { onSubmit, handleSubmit, style, text } = props;

	return (
		<TouchableOpacity
			style={[ ButtonComponentStyles.TouchableOpacity, { ...(style as object) } ]}
			onPress={(handleSubmit) ? handleSubmit(onSubmit) : onSubmit}
			{...props}
		>
			<Text style={ButtonComponentStyles.Text}>{text}</Text>
		</TouchableOpacity>
	);
};
