/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {configureStore} from './src/store';
const reduxStore = configureStore();

import MenuScreen from './src/screens/Menu/MenuScreen';


const App = () => {
  return (
    <Provider store={reduxStore}>
      <View style={{flex: 1, backgroundColor: '#aacfe4'}}>
        <MenuScreen />
      </View>
    </Provider>
  );
};

export default App;
