import { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '@jump/interfaces';

export interface LoginScreenProps extends PropsWithChildren<ViewProps>{}

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
