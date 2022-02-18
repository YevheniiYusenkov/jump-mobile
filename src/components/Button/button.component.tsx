import * as React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { useTheme } from '@jump/contexts';

import { ButtonProps } from './button.component.interfaces';
import {
	ButtonStylesCommon,
	ButtonStylesDefault,
	ButtonStylesOutlined,
} from './button.component.styles';

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
	const { onSubmit, handleSubmit, style, text, left, right, ...otherProps } = props;

	const { theme } = useTheme();
	const styles = ButtonStylesCommon(theme, left, right);

	const customStyles = (props.outlined) ? ButtonStylesOutlined(styles, theme.colors) : ButtonStylesDefault(styles, theme.colors);

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
