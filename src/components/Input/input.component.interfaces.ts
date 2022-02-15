import { ControllerProps } from 'react-hook-form';
import { TextInputProps } from 'react-native';

export interface InputProps extends Partial<ControllerProps & TextInputProps> {
	required: boolean;
	name: string;
}
