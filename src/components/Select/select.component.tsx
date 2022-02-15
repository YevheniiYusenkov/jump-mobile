import * as React from 'react';

import { View } from 'react-native';
import { Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';

import { SelectProps } from './select.component.interfaces';
import { SelectStyles } from './select.component.styles';

export const Select: React.FunctionComponent<SelectProps> = (props): JSX.Element => {
	const { defaultValue, control, name, required, setValue, ...otherProps } = props;
	console.log(defaultValue);
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={defaultValue}
			rules={{
				required,
			}}
			render={({ field: { value } }) => (
				<View style={SelectStyles.Container}>
					<Picker
						style={SelectStyles.Picker}
						selectedValue={value}
						onValueChange={(itemValue) => setValue(name, itemValue)}
						{...otherProps}
					>
						<Picker.Item style={SelectStyles.Item} label='Java' value='java' />
						<Picker.Item style={SelectStyles.Item} label='JavaScript' value='js' />
						<Picker.Item style={SelectStyles.Item} label='Html' value='html' />
					</Picker>
				</View>
			)}
		/>
	);
};
