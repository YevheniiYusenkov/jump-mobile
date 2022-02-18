import * as React from 'react';

import { Container, ContainerType, Logo } from '@jump/components';

export const LoadingScreen: React.FunctionComponent = () => {
	return (
		<Container type={ContainerType.Colored}>
			<Logo width={250} height={250} colored={false} />
		</Container>
	);
};
