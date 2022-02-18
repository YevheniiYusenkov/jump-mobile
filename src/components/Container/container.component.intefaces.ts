import { ViewProps } from 'react-native';

export const enum ContainerType {
	Primary,
	SafeArea,
	Form,
	KeyboardAvoiding,
	Colored,
	Buttons
}

export interface ContainerComponentProps extends ViewProps {
	type?: ContainerType,
}
