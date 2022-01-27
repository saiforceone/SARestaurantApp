import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Overlay, Text } from 'react-native-elements';

import {COLORS} from '../../../constants/styleConstants';
import ProgressOverlayStyles from './ProgressOverlay.styles';

/**
 * @function ProgressOverlay
 * @param {Object} props 
 * @returns {JSX.Element}
 * @description Renders an overlay to indicate some activity of indeterminate length is in progress
 */
const ProgressOverlay = props => {
  
  const {details, title, visible} = props;

  return (
    <View>
      <Overlay visible={visible}>
        <View style={ProgressOverlayStyles.container}>
          <ActivityIndicator animating color={COLORS.DARKISH} size='large' />
          <Text style={ProgressOverlayStyles.title}>{title}</Text>
          {details && <Text style={ProgressOverlayStyles.details}>{details}</Text>}
        </View>
      </Overlay>
    </View>
  );
};

ProgressOverlay.propTypes = {
  details: PropTypes.string,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
};

export default ProgressOverlay;
