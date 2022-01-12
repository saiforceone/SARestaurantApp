import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppTabNavigator from './AppTabNavigator';

export default () => {
  return (
    <NavigationContainer>
      <AppTabNavigator />
    </NavigationContainer>
  );
};
