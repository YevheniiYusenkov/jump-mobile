import * as React from 'react';

import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';

import { Logo } from '@jump/components';
import { CommonStyles } from '@jump/common';
import { ThemeContext } from '@jump/themes';
import { LoginForm, LoginFormData } from '@jump/forms';

import { LoginScreenStyles } from './login.screen.styles';
import { LoginScreenNavigationProp, LoginScreenProps } from './login.screen.interfaces';

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const { theme } = useContext(ThemeContext);
  const commonStyles = CommonStyles(theme.colors);
  const styles = LoginScreenStyles(theme, commonStyles);

  const onLoginSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  const onRequestPressed = () => {
    navigation.navigate('Signup');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.KeyboardAvoidingContainer}
    >
      <View style={styles.Container}>
        <Logo width={200} height={100} colored={true} />
        <LoginForm onLoginSubmit={onLoginSubmit} onRequestPressed={onRequestPressed} />
        <Text style={styles.FooterText}>Developed by Yevhenii Yusenkov, 2022</Text>
      </View>
    </KeyboardAvoidingView>
  );
};
