import { StyleSheet } from 'react-native';
import { COLORS, FONT_FAMILIES, FONT_SIZES, SPACING_CONSTANTS } from '../../constants/styleConstants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.JUSTWHITE,
    borderRadius: 3,
    flexDirection: 'row',
    marginBottom: SPACING_CONSTANTS.MEDIUM,
    padding: SPACING_CONSTANTS.MEDIUM
  },
  contentContainer: {
    flex: 1,
    marginLeft: SPACING_CONSTANTS.LARGE,
  },
  itemName: {
    color: COLORS.DARKISH,
    fontFamily: FONT_FAMILIES.Inter_Regular,
    fontSize: FONT_SIZES.LARGE,
    marginBottom: SPACING_CONSTANTS.SMALL,
  },
  itemCost: {
    color: COLORS.DARKISH,
    fontFamily: FONT_FAMILIES.Inter_SemiBold,
    fontSize: FONT_SIZES.MEDIUM
  }
});
