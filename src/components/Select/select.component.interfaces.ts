import { PickerProps } from '@react-native-picker/picker';
import { Control, ControllerProps, FieldValues, UseFormSetValue } from 'react-hook-form';

export interface SelectItem {
	label: string,
	value: number,
	default?: boolean,
}

export interface SelectProps extends Partial<PickerProps & ControllerProps> {
	required: boolean | string;
	name: string;
	control: Control<FieldValues, object>;
	setValue: UseFormSetValue<FieldValues>;
	items: SelectItem[] | [];
}
