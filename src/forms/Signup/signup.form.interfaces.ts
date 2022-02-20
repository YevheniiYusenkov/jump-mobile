import { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';

import { Mask } from 'react-native-mask-input';

export const enum SignupStep {
	First,
	Second,
	Third,
}

export interface SignupFormProps extends ViewProps {
	onSubmit: Function,
	formData?: Partial<SignupFormData>,
}

export interface SignupFormInterface {
	First: FunctionComponent<SignupFormProps>,
	Second: FunctionComponent<SignupFormProps>,
	Third: FunctionComponent<SignupFormProps>,
}

export interface SignupFormData {
	fullName: string,
	phoneNumber: string,
	plan: number,
	locality: string,
	street: string,
	suite: string,
	apartment?: string,
	username: string,
	password: string,
	confirmPassword: string,
}

export const SignupPhoneMask: Mask = [ '(', '0', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/ ];
