import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import ChipStyles from './CustomChip.styles';

/**
 * @function CustomChip
 * @param {Object} props 
 * @returns {JSX.Element}
 * @description Render a chip / label thingy
 */
const CustomChip = props => {
  const { containerOverride, title, iconElement } = props;
  return (
    <View style={[ChipStyles.container, containerOverride]}>
      {iconElement && (
        <View style={ChipStyles.iconContainer}>
          {iconElement}
        </View>
      )}
      <Text style={ChipStyles.title}>{title}</Text>
    </View>
  );
};

CustomChip.propTypes = {
  containerOverride: PropTypes.object,
  title: PropTypes.string.isRequired,
  iconElement: PropTypes.element,
}

export default CustomChip;
