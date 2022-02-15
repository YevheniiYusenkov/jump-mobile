import * as React from 'react';

import { View, Text } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { Input, Button } from '@jump/components';

import { LoginScreenStyles } from './login.screen.styles';
import { LoginScreenNavigationProp } from './login.screen.interfaces';

interface FormData {
  username: string,
  password: string,
}

export const LoginScreen: React.FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { control, handleSubmit } = useForm();

  const onLoginSubmit = (data: FormData) => {
    console.log(data);
  };

  const onRequestPressed = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={LoginScreenStyles.Container}>
      <Text>This is the Login Screen!</Text>

      <View style={LoginScreenStyles.LoginForm}>
        <Input required={false} name='username' control={control} placeholder='Enter your username.' />
        <Input required={false} name='password' control={control} placeholder='Enter your password.' secureTextEntry={true} />
        <View>
          <Button onSubmit={onLoginSubmit} text='Login' handleSubmit={handleSubmit} />
          <Button onSubmit={onRequestPressed} text='Request' />
        </View>
      </View>
    </View>
  );
};
