import * as React from 'react';

import { useContext } from 'react';
import { View } from 'react-native';
import { Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';

import { ThemeContext } from '@jump/themes';
import { CommonStyles } from '@jump/common';

import { SelectProps } from './select.component.interfaces';
import { SelectStyles } from './select.component.styles';

export const Select: React.FunctionComponent<SelectProps> = (props): JSX.Element => {
	const { control, name, required, setValue, items, ...otherProps } = props;
	const defaultItem = items.find((item) => item.default) || items[0];

	const { theme } = useContext(ThemeContext);
	const commonStyles = CommonStyles(theme.colors);
	const styles = SelectStyles(theme, commonStyles);

	return (
		<Controller
			control={control}
			name={name}
			defaultValue={defaultItem?.value}
			rules={{
				required,
			}}
			render={({ field }) => (
				<View style={styles.Container}>
					<Picker
						selectedValue={field.value}
						onValueChange={(itemValue) => setValue(name, itemValue)}
						style={styles.Picker}
						{...otherProps}
					>
						{items.map(({ label, value }) => (
							<Picker.Item style={styles.Item} label={label} value={value} key={value} />
						))}
					</Picker>
				</View>
			)}
		/>
	);
};
