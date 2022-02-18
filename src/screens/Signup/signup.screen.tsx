import * as React from 'react';
import { useState } from 'react';
import { BackHandler, Text } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { useLanguage, useTheme } from '@jump/contexts';
import { Container, ContainerType, Logo } from '@jump/components';
import { SignupForm, SignupFormData, SignupStep } from '@jump/forms';

import { SignupScreenStyles } from './signup.screen.styles';
import { SignupScreenNavigationProp } from './signup.screen.interfaces';

export const SignupScreen: React.FunctionComponent = () => {
	const navigation = useNavigation<SignupScreenNavigationProp>();
	const { strings } = useLanguage();

	const [ step, setStep ] = useState<SignupStep>(SignupStep.First);
	const [ data, setData ] = useState<Partial<SignupFormData>>();

	const mergeData = (newData: Partial<SignupFormData>) => {
		setData(prevData => ({
			...prevData,
			...newData,
		}));
	};

	useFocusEffect(
		React.useCallback(() => {
			const onBackPress = () => {
				switch (step) {
					case SignupStep.First:
						return false;
					case SignupStep.Second:
						setStep(SignupStep.First);
						return true;
					case SignupStep.Third:
						setStep(SignupStep.Second);
						return true;
				}
			};

			BackHandler.addEventListener('hardwareBackPress', onBackPress);

			return () =>
				BackHandler.removeEventListener('hardwareBackPress', onBackPress);
		}, [ step ])
	);

	const nextStep = (nextData: Partial<SignupFormData>) => {
		switch (step) {
			case SignupStep.First: {
				mergeData(nextData);
				setStep(SignupStep.Second);
				break;
			}
			case SignupStep.Second: {
				mergeData(nextData);
				setStep(SignupStep.Third);
				break;
			}
		}
	};

	const styles = SignupScreenStyles(useTheme().theme);

	const onSubmit = (finalData: Partial<SignupFormData>) => {
		if (!finalData.username && finalData.phoneNumber) {
			finalData.username = finalData.phoneNumber.replace(/\D+/g, '');
		}

		mergeData(finalData);

		console.log(data);

		navigation.navigate('Login');
	};

	return (
		<Container type={ContainerType.KeyboardAvoiding}>
			<Container>
				<Logo colored={true} style={styles.Logo}/>
				{step === SignupStep.First && <SignupForm.First style={styles.Form} onSubmit={nextStep} formData={data} />}
				{step === SignupStep.Second && <SignupForm.Second style={styles.Form} onSubmit={nextStep} formData={data} />}
				{step === SignupStep.Third && <SignupForm.Third style={styles.Form} onSubmit={onSubmit} formData={data} />}
				<Text style={styles.FooterText}>{strings.DevelopedBy}</Text>
			</Container>
		</Container>
	);
};
