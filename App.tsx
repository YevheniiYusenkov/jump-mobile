import * as React from 'react';

import { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { ApiProvider } from '@jump/contexts';
import { ThemeProvider } from '@jump/contexts';
import { LanguageProvider } from '@jump/contexts';
import { RootStackParamList } from '@jump/interfaces';
import { LoadingScreen, LoginScreen, SignupScreen } from '@jump/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FunctionComponent = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  useEffect(()=> {
    setTimeout(() => {setIsLoading(false); }, 3000);
  }, []);

  return (
    <ApiProvider>
    <LanguageProvider>
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
          {isLoading ? (
            <Stack.Screen name='Loading' component={LoadingScreen} />
          ) : (
            (
              <>
                <Stack.Screen name='Login' component={LoginScreen}/>
                <Stack.Screen name='Signup' component={SignupScreen}/>
              </>
            )
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </LanguageProvider>
    </ApiProvider>
  );
};

export default App;
