import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import StackNavigator from './src/navigations/StackNavigator';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
