import * as React from 'react';

import { KeyboardAvoidingView, Platform, SafeAreaView, View } from 'react-native';

import { useTheme } from '@jump/contexts';

import { ContainerComponentProps, ContainerType } from './container.component.intefaces';
import { ContainerComponentStyles } from './container.component.styles';

export const Container: React.FunctionComponent<ContainerComponentProps> = (props) => {
	const { type = ContainerType.SafeArea, children } = props;
	const styles = ContainerComponentStyles(useTheme().theme, type);

	switch (type) {
		case ContainerType.Primary:
		case ContainerType.Colored:
			return (
				<View style={styles.Container}>
					{children}
				</View>
			);
		case ContainerType.Buttons:
			return (
				<View style={styles.ButtonsContainer}>
					{children}
				</View>
			);
		case ContainerType.Form:
			return (
				<View style={styles.FormContainer}>
					{children}
				</View>
			);
		case ContainerType.SafeArea:
			return (
				<SafeAreaView style={styles.Container}>
					{children}
				</SafeAreaView>
			);
		case ContainerType.KeyboardAvoiding:
			return (
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={styles.KeyboardAvoiding}
				 >
					{children}
				</KeyboardAvoidingView>
			);
	}

	return (
		<View style={styles.Container}>
			{children}
		</View>
	);
};
