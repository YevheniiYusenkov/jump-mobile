import { Dispatch, SetStateAction } from 'react';

import { ApiService } from '@jump/api';

export interface ApiContextInterface {
	api: ApiService,
	setApi?: Dispatch<SetStateAction<ApiService>>,
}
