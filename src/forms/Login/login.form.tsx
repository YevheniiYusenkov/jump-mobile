import * as React from 'react';

import { useContext } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';

import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from '@jump/themes';
import { CommonStyles } from '@jump/common';
import { Button, Input } from '@jump/components';

import { LoginFormStyles } from './login.form.styles';
import { LoginFormProps } from './login.form.interfaces';

export const LoginForm: React.FunctionComponent<LoginFormProps> = (props): JSX.Element => {
	const { control, handleSubmit } = useForm();

	const { theme: { colors } } = useContext(ThemeContext);
	const commonStyles = CommonStyles(colors);
	const styles = LoginFormStyles(commonStyles);

	return (
		<View style={styles.Container}>
			<Input required={false} name='username' control={control} placeholder='Enter your username' icon={faUser} />
			<Input required={false} name='password' control={control} placeholder='Enter your password' icon={faKey} secureTextEntry={true} />
			<View style={styles.ButtonsContainer}>
				<Button onSubmit={props.onRequestPressed} text='Request' style={styles.RequestButton} outlined />
				<Button onSubmit={props.onLoginSubmit} text='Login' handleSubmit={handleSubmit} style={styles.LoginButton} />
			</View>
		</View>
	);
};
