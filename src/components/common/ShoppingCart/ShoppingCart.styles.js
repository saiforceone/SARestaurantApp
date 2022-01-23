import {StyleSheet} from 'react-native';
import { SPACING_CONSTANTS } from '../../../constants/styleConstants';

export default StyleSheet.create({
  container: {
    marginRight: SPACING_CONSTANTS.SMALL,
  },
  icon: {
    position: 'absolute',
    right: 7,
    top: 10,
    zIndex: 2,
  }
});
