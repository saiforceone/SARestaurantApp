import React from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';

import { useFonts, Cairo_400Regular, Cairo_300Light, Cairo_600SemiBold } from '@expo-google-fonts/cairo';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

import {configureStore} from './src/store';
const reduxStore = configureStore();

import AppNavContainer from './src/navigation/AppNavContainer';

const App = () => {
  let [fontsLoaded, fontLoadError] = useFonts({
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    console.log('font was not loaded');
    return <AppLoading />
  }

  return (
    <Provider store={reduxStore}>
      <AppNavContainer />
    </Provider>
  );
};

export default App;
