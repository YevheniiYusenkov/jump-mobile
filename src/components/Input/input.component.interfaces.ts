import { Control, ControllerProps, FieldValues } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface InputProps extends Partial<ControllerProps & TextInputProps> {
	required: boolean;
	name: string;
	control: Control<FieldValues, object>;
	icon?: IconDefinition
}
