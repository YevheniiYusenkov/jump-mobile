import * as React from 'react';

import { View } from 'react-native';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@jump/components';

import { LoginFormStyles } from './login.form.styles';
import { LoginFormProps } from './login.form.interfaces';

export const LoginForm: React.FunctionComponent<LoginFormProps> = (props): JSX.Element => {
	const { control, handleSubmit } = useForm();

	return (
		<View style={LoginFormStyles.Container}>
			<Input required={true} name='username' control={control} placeholder='Enter your username' />
			<Input required={true} name='password' control={control} placeholder='Enter your password' secureTextEntry={true} />
			<View style={LoginFormStyles.ButtonsContainer}>
				<Button onSubmit={props.onRequestPressed} text='Request' style={LoginFormStyles.RequestButton} outlined />
				<Button onSubmit={props.onLoginSubmit} text='Login' handleSubmit={handleSubmit} style={LoginFormStyles.LoginButton} />
			</View>
		</View>
	);
};
