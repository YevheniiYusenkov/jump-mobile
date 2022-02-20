import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import { English } from '@jump/languages';
import { DarkTheme, LightTheme } from '@jump/themes';
import { useTheme, useLanguage } from '@jump/contexts';
import { LoginForm, LoginFormData } from '@jump/forms';
import { Container, ContainerType, Logo } from '@jump/components';

import { LoginScreenStyles } from './login.screen.styles';
import { LoginScreenNavigationProp, LoginScreenProps } from './login.screen.interfaces';

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const styles = LoginScreenStyles(useTheme().theme);
  const { strings, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const onLoginSubmit = (data: LoginFormData) => {
    if (setLanguage) {
      setLanguage(English);
    }

    if (setTheme) {
      setTheme((theme === LightTheme) ? DarkTheme : LightTheme);
    }

    console.log(data);
  };

  const onRequestPressed = () => {
    navigation.navigate('Signup');
  };

  return (
    <Container type={ContainerType.KeyboardAvoiding}>
      <Container>
        <Logo width={200} height={100} colored={true} />
        <LoginForm onLoginSubmit={onLoginSubmit} onRequestPressed={onRequestPressed} />
        <Text style={styles.FooterText}>{strings.DevelopedBy}</Text>
      </Container>
    </Container>
  );
};
