import {StyleSheet} from 'react-native';
import { COLORS, FONT_FAMILIES, FONT_SIZES, FONT_WEIGHTS, SPACING_CONSTANTS } from '../../../constants/styleConstants';

const ListHeaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.REDISH,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: SPACING_CONSTANTS.MEDIUM,
    padding: SPACING_CONSTANTS.MEDIUM
  },
  title: {
    color: COLORS.OFFWHITE,
    fontFamily: FONT_FAMILIES.Cairo_SemiBold,
    fontSize: FONT_SIZES.LARGE,
    fontWeight: FONT_WEIGHTS.MEDIUM,
  }
});

export default ListHeaderStyles;
