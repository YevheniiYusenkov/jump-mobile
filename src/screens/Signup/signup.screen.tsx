import * as React from 'react';

import { ScrollView, Text, View } from 'react-native';

import { Logo } from '@jump/components';
import { useTheme } from '@jump/themes';
import { SignupForm } from '@jump/forms';
import { CommonStyles } from '@jump/common';

import { SignupScreenStyles } from './signup.screen.styles';

export const SignupScreen: React.FunctionComponent = () => {
	const { theme } = useTheme();
	const commonStyles = CommonStyles(theme.colors);
	const styles = SignupScreenStyles(theme, commonStyles);

	return (
		<View style={styles.Container}>
			<ScrollView
				style={styles.ScrollContainer}
				contentContainerStyle={styles.ScrollContainerFlex}
			>
				<Logo colored={true} style={styles.Logo}/>
				<SignupForm style={styles.Form} />
				<Text style={styles.FooterText}>Developed by Yevhenii Yusenkov, 2022</Text>
			</ScrollView>
		</View>
	);
};
