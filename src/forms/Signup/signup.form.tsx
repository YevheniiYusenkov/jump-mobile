import * as React from 'react';

import { useForm } from 'react-hook-form';

import { faHouse, faKey, faLocation, faPhone, faStreetView, faUser } from '@fortawesome/free-solid-svg-icons';

import { PhoneMask } from '@jump/common';
import { useLanguage } from '@jump/contexts';
import { Button, Container, ContainerType, Input, Select } from '@jump/components';

import { SignupFormStyles } from './signup.form.styles';
import { SignupFormInterface } from './signup.form.interfaces';

export const SignupForm: SignupFormInterface = {
	First: (props) => {
		const { style, onSubmit, formData } = props;
		const { control, handleSubmit, setValue, formState: { errors } } = useForm({
			mode: 'onBlur',
			defaultValues: { ...formData },
		});

		const { strings } = useLanguage();
		const styles = SignupFormStyles();

		return (
			<Container style={style} type={ContainerType.Form}>
				<Select
					control={control}
					name='tariffPlan'
					required={strings.Required}
					setValue={setValue}
					items={[
						{ label: 'First Choice', value: 'firstChoice' },
						{ label: 'Second Choice', value: 'secondChoice' },
						{ label: 'Third Choice', value: 'thirdChoice' },
					]}
				/>

				<Input
					control={control}
					name='fullName'
					required={strings.Required}
					placeholder={strings.EnterFullName}
					icon={faUser}
					errors={errors}
					validate={{
						onlyCharacter: value => /^([\u0400-\u04FF]\s*|[a-zA-Z]\s*)+$/.test(value) || strings.OnlyCharacters,
						minimumLength: value => /(?=.{2,})/.test(value) || strings.MinimumLength.replace('%s', '2'),
					}}
				/>

				<Input
					control={control}
					name='phoneNumber'
					required={strings.Required}
					placeholder='(0__) ___-__-__'
					icon={faPhone}
					mask={PhoneMask}
					errors={errors}
					validate={{
						invalid: value => /(\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2})/.test(value) || strings.InvalidPhoneNumber,
					}}
				/>

				<Button
					style={styles.Button}
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
					text={strings.Next}
				/>
			</Container>
		);
	},
	Second: (props) => {
		const { style, onSubmit, formData } = props;
		const { control, handleSubmit, formState: { errors } } = useForm({
			mode: 'onBlur',
			defaultValues: { ...formData },
		});

		const { strings } = useLanguage();
		const styles = SignupFormStyles();

		return (
			<Container style={style} type={ContainerType.Form}>
				<Input
					control={control}
					errors={errors}
					name='locality'
					required={strings.Required}
					placeholder={strings.EnterLocality}
					icon={faLocation}
					validate={{
						OnlyAlphanumericAndComma: value => /^([\u0400-\u04FF]\s*|[a-zA-Z0-9]\s*|[,.]\s*)+$/.test(value) || strings.OnlyAlphanumericAndCommaDot,
					}}
				/>

				<Input
					control={control}
					errors={errors}
					name='street'
					required={strings.Required}
					placeholder={strings.EnterStreet}
					icon={faStreetView}
					validate={{
						OnlyAlphanumericAndComma: value => /^([\u0400-\u04FF]\s*|[a-zA-Z0-9]\s*|[,.]\s*)+$/.test(value) || strings.OnlyAlphanumericAndCommaDot,
					}}
				/>

				<Input
					control={control}
					errors={errors}
					name='suite'
					required={strings.Required}
					placeholder={strings.EnterSuite}
					validate={{
						OnlyAlphanumericAndComma: value => /^([\u0400-\u04FF]\s*|[a-zA-Z0-9]\s*|[,.]\s*)+$/.test(value) || strings.OnlyAlphanumericAndCommaDot,
					}}
				/>

				<Input
					control={control}
					errors={errors}
					name='apartment'
					required={false}
					placeholder={strings.EnterApartment}
					icon={faHouse}
					validate={{
						OnlyAlphanumericAndComma: value => /^([\u0400-\u04FF]\s*|[a-zA-Z0-9]\s*|[,.]\s*)+$/.test(value) || strings.OnlyAlphanumericAndCommaDot,
					}}
				/>

				<Input
					control={control}
					errors={errors}
					name='username'
					required={false}
					placeholder={formData?.phoneNumber}
					icon={faUser}
					validate={{
						NoSpaces: value => /^\S*$/.test(value) || strings.NoSpaces,
						OnlyAlphanumericAndDashes: value => /^([\u0400-\u04FF]|[a-zA-Z0-9]|[_-])+$/.test(value) || strings.OnlyAlphanumericAndDashes,
					}}
				/>

				<Button
					style={styles.Button}
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
					text={strings.Next}
				/>
			</Container>
		);
	},
	Third: (props) => {
		const { style, onSubmit } = props;
		const { control, handleSubmit, getValues, formState: { errors } } = useForm({ mode: 'onBlur' });

		const { strings } = useLanguage();
		const styles = SignupFormStyles();

		return (
			<Container style={style} type={ContainerType.Form}>
				<Input
					control={control}
					errors={errors}
					name='password'
					required={strings.Required}
					placeholder={strings.EnterPassword}
					secureTextEntry
					icon={faKey}
					validate={{
						noSpaces: value => /^\S*$/.test(value) || strings.NoSpaces,
						minLength: value => /(?=.{8,})/.test(value) || strings.MinimumLength.replace('%s', '8'),
						uppercase: value => /(?=.*[a-z])/.test(value) || strings.AtLeastOneUppercase,
						lowercase: value => /(?=.*[A-Z])/.test(value) || strings.AtLeastOneLowercase,
						number: value => /(?=.*[0-9])/.test(value) || strings.AtLeastOneNumber,
					}}
				/>

				<Input
					control={control}
					errors={errors}
					name='confirmPassword'
					required={strings.Required}
					placeholder={strings.ConfirmPassword}
					secureTextEntry
					validate={{
						match: value => getValues<'password'>('password') === value || strings.PasswordNotMatch,
					}}
				/>

				<Button
					style={styles.Button}
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
					text={strings.Submit}
					right
				/>
			</Container>
		);
	},
};
