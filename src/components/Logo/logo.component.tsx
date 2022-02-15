import * as React from 'react';

import { Image } from 'react-native';

import { Assets } from '@jump/assets';

import { LogoProps } from './logo.component.interfaces';
import { LogoStyles } from './logo.component.styles';

export const Logo: React.FunctionComponent<LogoProps> = (props): JSX.Element => {
	const { colored, style, width = 125, height = 125, ...otherProps } = props;
	const logo = (colored) ? Assets.LogoBoxColored : Assets.LogoWhite;

	return (
		<Image source={logo} style={[ LogoStyles.Image, { ...(style as object) } ]} width={width} height={height} {...otherProps} />
	);
};
