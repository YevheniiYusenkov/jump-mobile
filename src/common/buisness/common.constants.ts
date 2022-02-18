import { Mask } from 'react-native-mask-input';

export enum TariffPlans {
	Light = '0',
	Medium = '1',
}

export const PhoneMask: Mask = [ '(', '0', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/ ];
