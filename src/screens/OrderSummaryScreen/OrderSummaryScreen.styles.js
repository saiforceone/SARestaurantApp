import {StyleSheet} from 'react-native';
import { COLORS, FONT_FAMILIES, FONT_SIZES, SPACING_CONSTANTS } from '../../constants/styleConstants';

export default StyleSheet.create({
  sectionText: {
    color: COLORS.DARKISH,
    fontFamily: FONT_FAMILIES.Inter_Regular,
    fontSize: FONT_SIZES.LARGE,
    marginBottom: SPACING_CONSTANTS.LARGE,
  },
})