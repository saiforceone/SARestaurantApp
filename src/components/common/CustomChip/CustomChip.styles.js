import {StyleSheet} from 'react-native';
import { COLORS, FONT_FAMILIES, FONT_SIZES, FONT_WEIGHTS, SPACING_CONSTANTS } from '../../../constants/styleConstants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.DARKISH,
    borderRadius: 3,
    flexDirection: 'row',
    paddingHorizontal: SPACING_CONSTANTS.MEDIUM,
    paddingVertical: SPACING_CONSTANTS.SMALL,
  },
  title: {
    color: COLORS.OFFWHITE,
    fontFamily: FONT_FAMILIES.Inter_Regular,
  },
  iconContainer: {
    alignItems: 'center',
    marginRight: SPACING_CONSTANTS.SMALL,
    justifyContent: 'center',
  }
});