export interface Plan {
	id: number,
	name: string,
	description?: string,
}

export type GetPlansResponse = Plan[] | [];
