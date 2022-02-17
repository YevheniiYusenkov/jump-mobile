import * as React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { ThemeContext } from '@jump/themes';
import { CommonStyles } from '@jump/common';

import { ButtonProps } from './button.component.interfaces';
import {
	ButtonStylesCommon,
	ButtonStylesDefault,
	ButtonStylesOutlined,
} from './button.component.styles';
import { useContext } from 'react';

export const Button: React.FunctionComponent<ButtonProps> = (props): JSX.Element => {
	const { onSubmit, handleSubmit, style, text, ...otherProps } = props;

	const { theme } = useContext(ThemeContext);
	const commonStyles = CommonStyles(theme.colors);
	const styles = ButtonStylesCommon(theme, commonStyles);

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
