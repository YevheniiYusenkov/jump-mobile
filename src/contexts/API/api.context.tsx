import * as React from 'react';

import { createContext, useContext, useState } from 'react';

import { ApiService } from '@jump/api';

import { ApiContextInterface } from './api.context.interface';

export const ApiContext = createContext<ApiContextInterface>({ api: new ApiService() });

export const ApiProvider = ({ children }: any) => {
	const { api: currentApi  } = useContext(ApiContext);
	const [ api, setApi ] = useState<ApiService>(currentApi);

	return (
		<ApiContext.Provider value={{ api, setApi }}>
			{children}
		</ApiContext.Provider>
	);
};

export const useAPI = (): ApiContextInterface => useContext(ApiContext);
