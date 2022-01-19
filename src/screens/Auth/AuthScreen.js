import React, {useCallback, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon, Input, Switch, Text } from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SAFE_AREA_EDGES} from '../../constants/styleConstants';
import AuthScreenStyles from './AuthScreen.styles';
import { authenticate } from '../../store/actions/appAction';

/**
 * @function renderContent
 * @param {String} username
 * @param {String} password
 * @param {Boolean} isRegistering
 * @param {Boolean} isAuthenticating
 * @param {Function} updateStateVar
 * @param {Function} authAction
 * @returns {JSX.Element}
 * @description Renders screen content
 */
const renderContent = ({username, password, isRegistering, isAuthenticating, updateStateVar, authAction}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      keyboardVerticalOffset={-10}
      style={AuthScreenStyles.container}
    >
      <ScrollView contentContainerStyle={AuthScreenStyles.scrollView}>
        <Icon color={COLORS.REDISH} name={'food-croissant'} size={160} type={'material-community'} />
        <Input
          autoCapitalize={'none'}
          autoComplete={'off'}
          autoCorrect={false}
          disabled={isAuthenticating}
          label={'Username'}
          leftIcon={
            <Icon color={COLORS.DARKISH} name={'account-circle'} type={'material-community'} />
          }
          onChangeText={value => updateStateVar({varName: 'username', value})}
          placeholder={'John.Batman'}
          value={username}
        />
        <Input
          disabled={isAuthenticating}
          label={'Password'}
          leftIcon={
            <Icon color={COLORS.DARKISH} name={'lock'} />
          }
          onChangeText={value => updateStateVar({varName: 'password', value})}
          placeholder={'********'}
          secureTextEntry
          value={password}
        />
        <View style={AuthScreenStyles.switchRow}>
          <Text style={AuthScreenStyles.switchText}>Registering?</Text>
          <Switch
            disabled={isAuthenticating}
            onValueChange={value => updateStateVar({varName: 'isRegistering', value})}
            thumbColor={COLORS.REDISH}
            trackColor={{false: COLORS.KINDA_SILVER, true: COLORS.REDISH}}
            value={isRegistering}
          />
        </View>
        <Button
          buttonStyle={{backgroundColor: COLORS.REDISH}}
          disabled={isAuthenticating}
          icon={{
            color: COLORS.OFFWHITE,
            name: 'check-circle',
            type: 'material-community'
          }}
          onPress={authAction}
          title={isRegistering ? 'Register Account' : 'Login'}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
};

/**
 * @function AuthScreen
 * @returns {JSX.Element}
 * @description Renders an auth screen
 */
export const AuthScreen = () => {

  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const appStore = useSelector(state => state.app);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // todo: fix this
  // useEffect(() => {
  //   if (appStore.token) {
  //     return navigation.pop();
  //   }
  // }, []);

  const updateStateVar = useCallback(({varName, value}) => {
    switch (varName) {
      case 'username':
        return setUsername(value);
      case 'password':
        return setPassword(value);
      case 'isRegistering':
        return setIsRegistering(value);
    }
  }, []);

  const authAction = useCallback(() => {
    if (!String(username).trim().length || !String(password).trim().length) {
      return;
    }
    console.log(`Attempt auth with username: ${username} and password: ${password} and isRegistering: ${isRegistering}`);
    return dispatch(authenticate({username, password, isRegistering, navigation}));
  }, []);

  return (
    <SafeAreaView edges={SAFE_AREA_EDGES} style={AuthScreenStyles.container}>
      {renderContent({
        username,
        password,
        isRegistering,
        isAuthenticating: appStore.isAuthenticating,
        updateStateVar, authAction,
      })}
    </SafeAreaView>
  );
};

export default AuthScreen;