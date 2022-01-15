import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import { COLORS } from '../../../constants/styleConstants';
import EmptyCardStyles from './EmptyCard.styles';

/**
 * @function EmptyCard
 * @param {Object} props 
 * @returns {JSX.Element}
 * @description Render an empty card
 */
const EmptyCard = props => {
  const {title, details} = props;
  return (
    <View style={EmptyCardStyles.container}>
      <View style={EmptyCardStyles.innerContainer}>
        <Icon
          color={COLORS.REDISH}
          name={'alert-decagram'}
          size={64}
          type={'material-community'}
        />
        <Text style={EmptyCardStyles.title}>{title}</Text>
        {details && (<Text style={EmptyCardStyles.details}>{details}</Text>)}
      </View>
    </View>
  );
};

EmptyCard.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string,
};

export default EmptyCard;