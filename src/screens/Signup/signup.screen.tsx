import * as React from 'react';

import { ScrollView, Text, View } from 'react-native';

import { Logo } from '@jump/components';
import { SignupForm } from '@jump/forms';

import { SignupScreenStyles } from './signup.screen.styles';

export const SignupScreen: React.FunctionComponent = (): JSX.Element => {
	return (
		<View style={SignupScreenStyles.Container}>
			<ScrollView style={SignupScreenStyles.ScrollContainer} contentContainerStyle={SignupScreenStyles.ScrollContainerFlex}>
				<Logo colored={true} style={SignupScreenStyles.Logo}/>
				<SignupForm style={SignupScreenStyles.Form} />
				<Text style={SignupScreenStyles.FooterText}>Developed by Yevhenii Yusenkov, 2022</Text>
			</ScrollView>
		</View>
	);
};
