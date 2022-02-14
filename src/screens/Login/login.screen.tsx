import * as React from 'react';

import { View, Text } from 'react-native';

import { LoginScreenStyles } from './login.screen.styles';

export const LoginScreen: React.FunctionComponent = (): JSX.Element => {
  return (
    <View style={LoginScreenStyles.Container}>
      <Text>This is the Login Screen!</Text>
    </View>
  );
};
