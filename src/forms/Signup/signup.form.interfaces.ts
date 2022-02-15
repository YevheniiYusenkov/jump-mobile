import { TariffPlans } from '@jump/common';
import { ViewProps } from 'react-native';

export interface SignupFormProps extends ViewProps {}

export interface SignupFormData {
	fullName: string,
	phoneNumber: string,
	tariffPlan: TariffPlans,
	locality: string,
	street: string,
	suite: string,
	apartment: string,
	username: string,
	password: string,
	confirmPassword: string,
}
