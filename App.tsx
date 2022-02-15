import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackParamList } from '@jump/interfaces';
import { LoginScreen, ProfileScreen, SignupScreen } from '@jump/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='Signup' component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
