import React from 'react';
import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * @function SettingsScreen
 * @returns {JSX.Element}
 * @description Renders a settings /about screen
 */
const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Settings / About Screen</Text>
        <Text>Fill this in later</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;