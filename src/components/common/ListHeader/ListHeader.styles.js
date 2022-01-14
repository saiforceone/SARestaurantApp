import {StyleSheet} from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING_CONSTANTS } from '../../../constants/styleConstants';

const ListHeaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.BLUEISH,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING_CONSTANTS.MEDIUM,
    padding: SPACING_CONSTANTS.MEDIUM
  },
  title: {
    color: COLORS.OFFWHITE,
    fontSize: FONT_SIZES.LARGE,
    fontWeight: FONT_WEIGHTS.MEDIUM,
  }
});

export default ListHeaderStyles;
