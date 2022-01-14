import React from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';

import { useFonts, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { Inter_400Regular } from '@expo-google-fonts/inter';

import {configureStore} from './src/store';
const reduxStore = configureStore();

import AppNavContainer from './src/navigation/AppNavContainer';

const App = () => {
  // todo: try to fix font loading issue. error related to expo-file-system
  // let [fontsLoaded, fontLoadError] = useFonts({
  //   Inter_400Regular,
  // });

  // console.log('font load error: ', fontLoadError);

  // if (!fontsLoaded) {
  //   console.log('font was not loaded');
  //   return <AppLoading />
  // }

  return (
    <Provider store={reduxStore}>
      <AppNavContainer />
    </Provider>
  );
};

export default App;
