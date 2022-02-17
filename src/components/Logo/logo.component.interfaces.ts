import { ImageProps } from 'react-native';

export interface LogoProps extends Omit<ImageProps, 'source'> {
	colored: boolean;
	fill?: string;
}
