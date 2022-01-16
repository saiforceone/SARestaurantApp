import {StyleSheet} from 'react-native';
import { COLORS, FONT_FAMILIES, FONT_SIZES, SPACING_CONSTANTS } from '../../../constants/styleConstants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.JUSTWHITE,
    borderRadius: 5,
    padding: SPACING_CONSTANTS.MEDIUM,
  },
  username: {
    fontFamily: FONT_FAMILIES.Inter_Regular,
    fontSize: FONT_SIZES.X_LARGE,
    textAlign: 'center',
    marginTop: SPACING_CONSTANTS.SMALL,
  },
  lastLogin: {
    color: COLORS.NOT_SO_DARKISH,
    fontFamily: FONT_FAMILIES.Inter_SemiBold,
    fontSize: FONT_SIZES.MEDIUM,
    marginTop: SPACING_CONSTANTS.SMALL,
    textAlign: 'center',
  },
  notLoggedIn: {
    color: COLORS.REDISH,
  }
});