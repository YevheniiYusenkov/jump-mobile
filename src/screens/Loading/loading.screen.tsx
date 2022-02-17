import * as React from 'react';

import { useContext } from 'react';
import { SafeAreaView } from 'react-native';

import { Logo } from '@jump/components';
import { CommonStyles } from '@jump/common';
import { ThemeContext } from '@jump/themes';

import { LoadingScreenStyles } from './loading.screen.styles';

export const LoadingScreen: React.FunctionComponent = (): JSX.Element => {
	const { theme: { colors } } = useContext(ThemeContext);
	const commonStyles = CommonStyles(colors);
	const styles = LoadingScreenStyles(commonStyles);

	return (
		<SafeAreaView style={styles.Container}>
			<Logo width={250} height={250} colored={false} />
		</SafeAreaView>
	);
};
