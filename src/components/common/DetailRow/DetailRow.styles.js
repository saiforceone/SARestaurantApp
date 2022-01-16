import { StyleSheet } from 'react-native';
import { COLORS, FONT_FAMILIES, FONT_SIZES, SPACING_CONSTANTS } from '../../../constants/styleConstants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.JUSTWHITE,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: SPACING_CONSTANTS.MEDIUM,
    padding: SPACING_CONSTANTS.MEDIUM
  },
  iconContainer: {
    marginRight: SPACING_CONSTANTS.MEDIUM,
  },
  innerContainer: {
    marginRight: SPACING_CONSTANTS.SMALL,
    width: '30%',
  },
  labelText: {
    color: COLORS.NOT_SO_DARKISH,
    fontFamily: FONT_FAMILIES.Inter_SemiBold,
  },
  valueText: {
    flex: 1,
    fontFamily: FONT_FAMILIES.Inter_Regular,
    fontSize: FONT_SIZES.LARGE,
  },
});
