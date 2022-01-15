import {StyleSheet} from 'react-native';
import { COLORS, FONT_FAMILIES, FONT_SIZES, FONT_WEIGHTS, SPACING_CONSTANTS } from '../../../constants/styleConstants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    width: '70%'
  },
  title: {
    fontFamily: FONT_FAMILIES.Inter_Regular,
    fontSize: FONT_SIZES.X_LARGE * 1.25,
    textAlign: 'center',
  },
  details: {
    fontFamily: FONT_FAMILIES.Inter_Regular,
    fontSize: FONT_SIZES.LARGE,
    fontWeight: FONT_WEIGHTS.MEDIUM,
    marginTop: SPACING_CONSTANTS.SMALL,
    textAlign: 'center',
  }
});
