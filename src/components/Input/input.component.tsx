import * as React from 'react';

import { TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

import { CommonColors } from '@jump/common';

import { InputProps } from './input.component.interfaces';
import { InputComponentStyles } from './input.component.styles';

export const Input: React.FunctionComponent<InputProps> = (props): JSX.Element => {
	const { control, name, required, placeholder, style } = props;

	return (
		<Controller
			control={control}
			name={name}
			rules={{
				required,
			}}
			render={({ field: { onChange, onBlur, value } }) => (
				<TextInput
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
					placeholder={placeholder}
					placeholderTextColor={CommonColors.TextSecondary}
					style={[ InputComponentStyles.TextInput, { ...(style as object) } ]}
					{...props}
				/>
			)}
		/>
	);
};
