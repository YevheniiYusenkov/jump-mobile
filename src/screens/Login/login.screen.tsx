import * as React from 'react';

import { View, Text } from 'react-native';

import { Input } from '@jump/components';

import { LoginScreenStyles } from './login.screen.styles';
import { useForm } from 'react-hook-form';

export const LoginScreen: React.FunctionComponent = (): JSX.Element => {
  const { control } = useForm();

  return (
    <View style={LoginScreenStyles.Container}>
      <Text>This is the Login Screen!</Text>
      <Input required={false} name='username' control={control} placeholder='Enter your username.' />
    </View>
  );
};
