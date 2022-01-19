import {StyleSheet} from 'react-native';
import { COLORS, FONT_FAMILIES, FONT_SIZES, SPACING_CONSTANTS } from '../../constants/styleConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: SPACING_CONSTANTS.MEDIUM,
  },
  switchRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SPACING_CONSTANTS.MEDIUM,
    paddingHorizontal: SPACING_CONSTANTS.SMALL,
  },
  swtich: {
    backgroundColor: COLORS.REDISH,
  },
  switchText: {
    fontFamily: FONT_FAMILIES.Inter_Regular,
    fontSize: FONT_SIZES.MEDIUM,
  }
});
