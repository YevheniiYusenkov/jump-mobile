import axios from 'axios';

import { GetPlansResponse } from './api.interfaces';

import { config } from './config';

export class ApiService {
	public async plans(): Promise<GetPlansResponse> {
		try {
			return (await axios.get(config.url + '/internet/plans')).data;
		} catch (err) {
			console.error(err);
			return [];
		}
	}
}
