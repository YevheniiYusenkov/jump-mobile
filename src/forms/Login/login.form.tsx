import * as React from 'react';
import { useForm } from 'react-hook-form';

import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

import { useLanguage } from '@jump/contexts';
import { Button, Container, ContainerType, Input } from '@jump/components';

import { LoginFormProps } from './login.form.interfaces';


export const LoginForm: React.FunctionComponent<LoginFormProps> = (props) => {
	const { control, handleSubmit, formState: { errors } } = useForm();
	const { strings } = useLanguage();

	return (
		<Container type={ContainerType.Form}>
			<Input
				required={strings.Required}
				name='username' control={control}
				placeholder={strings.EnterUsername}
				icon={faUser}
				errors={errors}
			/>

			<Input
				required={strings.Required}
				name='password'
				control={control}
				placeholder={strings.EnterPassword}
				icon={faKey}
				secureTextEntry={true}
				errors={errors}
			/>

			<Container type={ContainerType.Buttons}>
				<Button onSubmit={props.onRequestPressed} text={strings.Request} left outlined />
				<Button onSubmit={props.onLoginSubmit} text={strings.Login} handleSubmit={handleSubmit} right />
			</Container>
		</Container>
	);
};
