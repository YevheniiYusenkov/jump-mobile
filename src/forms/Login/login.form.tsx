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
	const { control, handleSubmit, formState: { errors } } = useForm();

	const { theme: { colors } } = useContext(ThemeContext);
	const commonStyles = CommonStyles(colors);
	const styles = LoginFormStyles(commonStyles);

	return (
		<View style={styles.Container}>
			<Input
				required='This field is required.'
				name='username' control={control}
				placeholder='Enter your username'
				icon={faUser}
				errors={errors}
				validate={{
					oneLowercaseCharacter: (value) => /(?=.*[a-z])/.test(value) || 'Must have lowercase character',
					oneUppercaseCharacter: (value) => /(?=.*[A-Z])/.test(value) || 'Must have uppercase character',
				}}
			/>

			<Input
				required={'This field is required.'}
				name='password'
				control={control}
				placeholder='Enter your password'
				icon={faKey}
				secureTextEntry={true}
				errors={errors}
				validate={{
					oneLowercaseCharacter: (value) => /(?=.*[a-z])/.test(value) || 'Must have lowercase character',
					oneUppercaseCharacter: (value) => /(?=.*[A-Z])/.test(value) || 'Must have uppercase character',
				}}
			/>

			<View style={styles.ButtonsContainer}>
				<Button onSubmit={props.onRequestPressed} text='Request' style={styles.RequestButton} outlined />
				<Button onSubmit={props.onLoginSubmit} text='Login' handleSubmit={handleSubmit} style={styles.LoginButton} />
			</View>
		</View>
	);
};
