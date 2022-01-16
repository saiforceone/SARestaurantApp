import PropTypes from 'prop-types';
import React from 'react'
import { View } from 'react-native';
import {Button, Icon, Text} from 'react-native-elements';
import { COLORS } from '../../../constants/styleConstants';
import DetailRowStyles from './DetailRow.styles';

/**
 * @function DetailRow
 * @param {Objects} props 
 * @returns {JSX.Element}
 * @description Renders a detail row that shows an optional icon, label and text
 */
const DetailRow = props => {
  const {action, hideLabel, iconElement, labelText, valueText} = props;
  return (
    <View style={DetailRowStyles.container}>
      {iconElement && (
        <View style={DetailRowStyles.iconContainer}>
          {iconElement}
        </View>)
      }
      {!hideLabel && (
        <View style={DetailRowStyles.innerContainer}>
          <Text style={DetailRowStyles.labelText}>{labelText}</Text>
        </View>
      )}
      <Text style={DetailRowStyles.valueText}>{valueText}</Text>
      {action && (
        <Button
          buttonStyle={{backgroundColor: COLORS.GREENISH}}
          icon={{
            color: COLORS.JUSTWHITE,
            name: 'open-in-new'
          }}
          onPress={action}
        />
      )}
    </View>
  );
};

DetailRow.propTypes = {
  action: PropTypes.func,
  iconElement: PropTypes.element,
  labelText: PropTypes.string,
  hideLabel: PropTypes.bool,
  valueText: PropTypes.string.isRequired,
};

export default DetailRow;
