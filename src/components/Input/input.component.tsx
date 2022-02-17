import * as React from 'react';

import { useContext } from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

import { ErrorMessage } from '@hookform/error-message';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { ThemeContext } from '@jump/themes';
import { CommonStyles } from '@jump/common';

import { InputProps } from './input.component.interfaces';
import { InputStyles, InputStylesWithIcon, InputCommonStyles } from './input.component.styles';

export const Input: React.FunctionComponent<InputProps> = (props) => {
	const { control, name, required, errors, validate, placeholder, style, icon, ...otherProps } = props;

	const { theme }  = useContext(ThemeContext);
	const commonStyles = CommonStyles(theme.colors);
	const styles = InputCommonStyles(theme, commonStyles);

	const customStyles = (icon) ? InputStylesWithIcon(styles) : InputStyles(styles);

	return (
		<Controller
			control={control}
			name={name}
			rules={{
				validate,
				required,
			}}
			render={({ field: { onChange, onBlur, value } }) => (
				<>
					<View style={customStyles.Container}>
						{icon && (
							<FontAwesomeIcon style={customStyles.Icon} icon={icon} color={theme.colors.Text} />
						)}
						<TextInput
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder={placeholder}
							placeholderTextColor={theme.colors.TextSecondary}
							style={[ customStyles.Input, { ...(style as object) } ]}
							{...otherProps}
						/>
					</View>
					{errors &&
						<ErrorMessage errors={errors} name={name} render={({ message }) => {
							return <Text style={customStyles.Error}>{message}</Text>;
						}}
						/>
					}
				</>
			)}
		/>
	);
};
