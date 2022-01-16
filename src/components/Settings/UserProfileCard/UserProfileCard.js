import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import {Button, Icon, Text} from 'react-native-elements';
import { COLORS, SPACING_CONSTANTS } from '../../../constants/styleConstants';
import UserProfileCardStyles from './UserProfileCard.styles';

/**
 * @function UserProfileCard
 * @param {Object} props 
 * @returns {JSX.Element}
 * @description Renders a user profile card with options to login or logout
 */
const UserProfileCard = props => {
  const {action, user} = props;
  return (
    <View style={UserProfileCardStyles.container}>
      <Icon
        color={COLORS.NOT_SO_DARKISH}
        name={'account-circle'}
        size={60}
        type={'material-community'}
      />
      {user ? (
        <>
          <Text style={UserProfileCardStyles.username}>Some User</Text>
          <Text style={UserProfileCardStyles.lastLogin}>January 14, 2022 @ 4:00PM</Text>
        </>
      ) : (
        <Text style={[UserProfileCardStyles.username, UserProfileCardStyles.notLoggedIn]}>
          Not Logged In
        </Text>
      )}
      <Button
        buttonStyle={{
          backgroundColor: user ? COLORS.REDISH : COLORS.GREENISH
        }}
        containerStyle={{marginTop: SPACING_CONSTANTS.MEDIUM}}
        icon={{
          color: COLORS.OFFWHITE,
          name: user ? 'logout-variant' : 'login-variant',
          type: 'material-community'
        }}
        onPress={action}
        title={user ? 'Logout' : 'Login'}
      />
    </View>
  );
};

UserProfileCard.propTypes = {
  user: PropTypes.object,
  action: PropTypes.func,
}

export default UserProfileCard;