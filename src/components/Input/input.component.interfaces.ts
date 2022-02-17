import { Control, ControllerProps, FieldErrors, FieldValues, Validate } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface InputProps extends Partial<ControllerProps & TextInputProps> {
	required: boolean | string;
	name: string;
	control: Control<FieldValues, object>;
	icon?: IconDefinition;
	errors?: FieldErrors<FieldValues>;
	validate?: Validate<any> | Record<string, Validate<any>> | undefined
}
