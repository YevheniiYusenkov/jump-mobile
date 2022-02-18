import * as React from 'react';

import { Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

import MaskInput from 'react-native-mask-input';
import { ErrorMessage } from '@hookform/error-message';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { useTheme } from '@jump/contexts';

import { InputProps } from './input.component.interfaces';
import { InputStyles, InputStylesWithIcon, InputCommonStyles } from './input.component.styles';

export const Input: React.FunctionComponent<InputProps> = (props) => {
	const {
		control,
		name,
		required,
		errors,
		validate,
		placeholder,
		mask,
		style,
		icon,
		onChangeText,
		...otherProps
	} = props;

	const { theme } = useTheme();
	const styles = InputCommonStyles(theme);

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
						{!mask ? (
							<TextInput
								onBlur={onBlur}
								onChangeText={(text: string) => {
									if (onChangeText) {
										onChangeText(text);
									} onChange(text);
								}}
								value={value}
								placeholder={placeholder}
								placeholderTextColor={theme.colors.TextSecondary}
								style={[ customStyles.Input, { ...(style as object) } ]}
								{...otherProps}
							/>
						) : (
							<MaskInput
								mask={mask}
								onBlur={onBlur}
								onChangeText={(text: string) => {
									if (onChangeText) {
										onChangeText(text);
									} onChange(text);
								}}
								value={value}
								placeholder={placeholder}
								placeholderTextColor={theme.colors.TextSecondary}
								style={[ customStyles.Input, { ...(style as object) } ]}
								{...otherProps}
							/>
						)}
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
