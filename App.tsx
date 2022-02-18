import * as React from 'react';

import { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from '@jump/contexts';
import { LanguageProvider } from '@jump/contexts';
import { RootStackParamList } from '@jump/interfaces';
import { LoadingScreen, LoginScreen, ProfileScreen, SignupScreen } from '@jump/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FunctionComponent = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ isSigned, setIsSigned ] = useState<boolean>(false);

  useEffect(()=> {
    setTimeout(() => {setIsLoading(false); setIsSigned(false); }, 3000);
  }, []);

  return (
    <LanguageProvider>
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
          {isLoading ? (
            <Stack.Screen name='Loading' component={LoadingScreen} />
          ) : (
            isSigned ? (
              <Stack.Screen name='Profile' component={ProfileScreen} />
            ) : (
              <>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Signup' component={SignupScreen} />
              </>
            )
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
