import * as React from 'react';

import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Logo } from '@jump/components';
import { LoginForm, LoginFormData } from '@jump/forms';

import { LoginScreenStyles } from './login.screen.styles';
import { LoginScreenNavigationProp, LoginScreenProps } from './login.screen.interfaces';

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = (): JSX.Element => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const onLoginSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  const onRequestPressed = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={LoginScreenStyles.Container}>
      <Logo colored={true} />
      <LoginForm onLoginSubmit={onLoginSubmit} onRequestPressed={onRequestPressed} />
      <Text style={LoginScreenStyles.FooterText}>Developed by Yevhenii Yusenkov, 2022</Text>
    </View>
  );
};
