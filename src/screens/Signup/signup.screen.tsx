import * as React from 'react';

import { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Logo } from '@jump/components';
import { SignupForm } from '@jump/forms';
import { CommonStyles } from '@jump/common';
import { ThemeContext } from '@jump/themes';

import { SignupScreenStyles } from './signup.screen.styles';

export const SignupScreen: React.FunctionComponent = () => {
	const { theme } = useContext(ThemeContext);
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
