import { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';

import { TariffPlans } from '@jump/common';

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
	tariffPlan: TariffPlans,
	locality: string,
	street: string,
	suite: string,
	apartment?: string,
	username: string,
	password: string,
	confirmPassword: string,
}
