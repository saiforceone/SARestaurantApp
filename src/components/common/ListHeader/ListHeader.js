import PropTypes from 'prop-types';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Text} from 'react-native';
import ListHeaderStyles from './ListHeader.styles';
import {COLORS} from '../../../constants/styleConstants';

const ListHeader = props => {
  const {isLoading, title} = props;
  return (
    <View style={ListHeaderStyles.container}>
      <Text style={ListHeaderStyles.title}>{title}</Text>
      {isLoading && (<ActivityIndicator animating color={COLORS.OFFWHITE} size={'large'} />)}
    </View>
  );
};

ListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};

export default ListHeader;