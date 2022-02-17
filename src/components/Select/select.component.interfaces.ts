import { PickerProps } from '@react-native-picker/picker';
import { Control, ControllerProps, FieldValues, UseFormSetValue } from 'react-hook-form';

export interface SelectProps extends Partial<PickerProps & ControllerProps> {
	required: boolean;
	name: string;
	control: Control<FieldValues, object>;
	setValue: UseFormSetValue<FieldValues>;
	items: {
		label: string,
		value: string,
		default?: boolean,
	}[];
}
