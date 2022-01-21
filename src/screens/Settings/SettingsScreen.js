import React, { useCallback, useEffect } from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Divider, Icon} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import DetailRow from '../../components/common/DetailRow/DetailRow';
import { COLORS, DetailScreenStyles, SPACING_CONSTANTS } from '../../constants/styleConstants';
import UserProfileCard from '../../components/Settings/UserProfileCard/UserProfileCard';
import StorageUtils from '../../utils/StorageUtils';
import { STORAGE_CONSTANTS } from '../../constants';
import ActionCreatorUtils from '../../store/utils/ActionCreatorUtils';
import { APP_ACTIONS } from '../../store/constants';
import { getProfile } from '../../store/actions/appAction';

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
 * @param {Function} logoutActionPrompt
 * @param {Object} navigation
 * @returns {JSX.Element}
 * @description Renders content for the settings screen
 */
const renderContent = ({hasAuthToken, logoutActionPrompt, navigation}) => {
  return (
    <ScrollView contentContainerStyle={[DetailScreenStyles.scrollView, {padding: SPACING_CONSTANTS.LARGE}]}>
      <UserProfileCard 
        action={hasAuthToken ? logoutActionPrompt : () => navigateTo({navigation, target: 'settingsAuthScreen'})} 
        hasAuthToken={hasAuthToken}
      />
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

  useEffect(() => {

    const fetchProfile = async () => {
      const tokenData = await StorageUtils.getItemSecure({key: STORAGE_CONSTANTS.AUTH_TOKEN});

      if (tokenData.data) {
        dispatch(getProfile());
      }
    }

    fetchProfile().then();
  }, []);

  const logoutAction = useCallback(() => {

    StorageUtils.deleteItemSecure({key: STORAGE_CONSTANTS.AUTH_TOKEN})
      .then(() => {
        dispatch(ActionCreatorUtils.buildAction(APP_ACTIONS.UNSET_DATA));
      })
  }, []);

  const logoutActionPrompt = useCallback(() => {
    return Alert.alert(
      'Logout?',
      'You are about to logout. Would you like to continue?',
      [
        {
          style: 'cancel',
          text: 'No',
        },
        {
          onPress: () => logoutAction(),
          style: 'destructive',
          text: 'Yes',
        }
      ]
    )
  }, []);
  
  return (
    <SafeAreaView style={DetailScreenStyles.container}>
      {renderContent({hasAuthToken: !!appStore.authToken, logoutActionPrompt, navigation})}
    </SafeAreaView>
  );
};

export default SettingsScreen;