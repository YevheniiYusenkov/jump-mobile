import * as React from 'react';

import { useContext } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';

import { ThemeContext } from '@jump/themes';
import { CommonStyles } from '@jump/common';
import { Input, Button, Select } from '@jump/components';

import { SignupFormStyles } from './signup.form.styles';
import { SignupFormData, SignupFormProps } from './signup.form.interfaces';

export const SignupForm: React.FunctionComponent<SignupFormProps> = (props): JSX.Element => {
	const { control, handleSubmit, setValue } = useForm();

	const { theme: { colors } } = useContext(ThemeContext);
	const commonStyles = CommonStyles(colors);
	const styles = SignupFormStyles(commonStyles);

	return (
		<View style={[ styles.Container, { ...(props.style as object) } ]}>
			<Select control={control} name='tariffPlan' required={false} setValue={setValue} items={[
				{ label: 'First Choice', value: 'firstChoice' },
				{ label: 'Second Choice', value: 'secondChoice' },
				{ label: 'Third Choice', value: 'thirdChoice' },
			]} />
			<Input control={control} name='fullName' required={false} placeholder='Enter your full name' />
			<Input control={control} name='phoneNumber' required={false} placeholder='Enter your phone number' />
			<Input control={control} name='locality' required={false} placeholder='Enter your locality' />
			<Input control={control} name='street' required={false} placeholder='Enter your street' />
			<Input control={control} name='suite' required={false} placeholder='Enter your suite' />
			<Input control={control} name='apartment' required={false} placeholder='Enter your apartment' />
			<Input control={control} name='username' required={false} placeholder='Enter your username' />
			<Input control={control} name='password' required={false} placeholder='Enter your password' />
			<Input control={control} name='confirmPassword' required={false} placeholder='Confirm your password' />
			<Button style={styles.Button} handleSubmit={handleSubmit} onSubmit={(data: SignupFormData) => {console.log(data);}} text='Submit'/>
		</View>
	);
};
