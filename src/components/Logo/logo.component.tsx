import * as React from 'react';

import { View } from 'react-native';

import { LogoImage } from '@jump/assets';
import { useTheme } from '@jump/contexts';

import { LogoProps } from './logo.component.interfaces';
import { Color } from 'react-native-svg/lib/typescript/lib/extract/types';

export const Logo: React.FunctionComponent<LogoProps> = (props) => {
	const { theme: { colors } } = useTheme();

	const { colored, style, fill, width = 125, height = 60, ...otherProps } = props;
	const color: Color = (fill) ? fill : (colored) ? colors.Secondary : colors.Logo;

	return (
		<View style={style} {...otherProps}>
			<LogoImage fill={color} width={width} height={height} />
		</View>
	);
};
