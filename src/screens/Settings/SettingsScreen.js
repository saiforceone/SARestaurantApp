import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Divider, Icon} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import DetailRow from '../../components/common/DetailRow/DetailRow';
import { COLORS, DetailScreenStyles, SPACING_CONSTANTS } from '../../constants/styleConstants';
import UserProfileCard from '../../components/Settings/UserProfileCard/UserProfileCard';

/**
 * @function navigateTo
 * @param {Object} navigation
 * @param {String} target
 * @param {Object} params
 * @returns {void}
 * @description Navigates to a target destination passing long params
 */
const navigateTo = ({navigation, target, params}) => {
  if (!navigation || !target) return;
  navigation.navigate(target, params);
};

/**
 * @function renderContent
 * @param {Boolean} hasAuthToken
 * @param {Object} navigation
 * @returns {JSX.Element}
 * @description Renders content for the settings screen
 */
const renderContent = ({hasAuthToken, navigation}) => {
  return (
    <ScrollView contentContainerStyle={[DetailScreenStyles.scrollView, {padding: SPACING_CONSTANTS.LARGE}]}>
      <UserProfileCard action={() => navigateTo({navigation, target: 'settingsAuthScreen'})} hasAuthToken={hasAuthToken} />
      <Divider style={DetailScreenStyles.dividerStyle} />
      <DetailRow
        action={() => navigateTo({navigation, target: 'aboutScreen'})}
        iconElement={
          <Icon
            color={COLORS.DARKISH}
            name={'information'}
            type={'material-community'}
          />
        }
        hideLabel
        valueText={'About Super Restaurant App'}
      />
      <DetailRow
        iconElement={
          <Icon
            color={COLORS.DARKISH}
            name={'file-document'}
            type={'material-community'}
          />
        }
        hideLabel
        valueText={'Terms & Conditions'}
      />
      <DetailRow
        iconElement={
          <Icon
            color={COLORS.DARKISH}
            name={'help-rhombus'}
            type={'material-community'}
          />
        }
        hideLabel
        valueText={'Help & Support'}
      />
    </ScrollView>
  );
};

/**
 * @function SettingsScreen
 * @returns {JSX.Element}
 * @description Renders a settings /about screen
 */
const SettingsScreen = () => {
  const dispatch = useDispatch();
  const appStore = useSelector(state => state.app);
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={DetailScreenStyles.container}>
      {renderContent({hasAuthToken: !!appStore.authToken, navigation})}
    </SafeAreaView>
  );
};

export default SettingsScreen;