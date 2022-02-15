import * as React from 'react';

import { View } from 'react-native';
import { useForm } from 'react-hook-form';

import { Input, Button } from '@jump/components';

import { SignupFormStyles } from './signup.form.styles';
import { SignupFormData, SignupFormProps } from './signup.form.interfaces';

export const SignupForm: React.FunctionComponent<SignupFormProps> = (props): JSX.Element => {
	const { control, handleSubmit } = useForm();

	return (
		<View style={[ SignupFormStyles.Container, { ...(props.style as object) } ]}>
			<Input control={control} name='fullName' required={true} placeholder='Enter your full name' />
			<Input control={control} name='phoneNumber' required={true} placeholder='Enter your phone number' />
			<Input control={control} name='locality' required={true} placeholder='Enter your locality' />
			<Input control={control} name='street' required={true} placeholder='Enter your street' />
			<Input control={control} name='suite' required={true} placeholder='Enter your suite' />
			<Input control={control} name='apartment' required={true} placeholder='Enter your apartment' />
			<Input control={control} name='username' required={true} placeholder='Enter your username' />
			<Input control={control} name='password' required={true} placeholder='Enter your password' />
			<Input control={control} name='confirmPassword' required={true} placeholder='Confirm your password' />
			<Button handleSubmit={handleSubmit} onSubmit={(data: SignupFormData) => {console.log(data);}} text='Submit'/>
		</View>
	);
};
