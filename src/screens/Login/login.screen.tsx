import * as React from 'react';

import { View } from 'react-native';

import { LoginScreenProps } from './login.screen.interfaces';

export const LoginScreen: React.FunctionComponent = (props: LoginScreenProps): JSX.Element => {
  return (
    <View>
      {props.children}
    </View>
  );
};
