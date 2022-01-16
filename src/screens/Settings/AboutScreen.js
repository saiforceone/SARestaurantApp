import React from 'react';
import { View } from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DetailScreenStyles, SPACING_CONSTANTS } from '../../constants/styleConstants';

/**
 * @function AboutScreen
 * @returns {JSX.Element}
 * @description Renders an about screen
 */
const AboutScreen = () => {
  return (
    <SafeAreaView style={DetailScreenStyles.container}>
      <View style={[DetailScreenStyles.container, {padding: SPACING_CONSTANTS.MEDIUM}]}>
        <Text style={DetailScreenStyles.important}>
          This demo project was made to show you could possibly build a mobile application that consumes our custom API. All code will be available under the MIT license and is free to be used.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
