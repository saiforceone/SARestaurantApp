import {StyleSheet} from 'react-native';
import { COLORS, FONT_FAMILIES, FONT_SIZES, FONT_WEIGHTS, SPACING_CONSTANTS } from '../../constants/styleConstants';

export const MenuItemDetailStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1
  },
  scrollView: {
    flexGrow: 1,
  },
  mainImage: {
    height: 280,
    resizeMode: 'cover',
    width: undefined,
  },
  contentContainer: {
    padding: SPACING_CONSTANTS.LARGE,
  },
  title: {
    fontFamily: FONT_FAMILIES.Inter_Regular,
    fontSize: FONT_SIZES.X_LARGE * 1.5,
  },
  details: {
    fontFamily: FONT_FAMILIES.Inter_Regular,
    fontSize: FONT_SIZES.MEDIUM,
    lineHeight: FONT_SIZES.MEDIUM * 1.5,
  },
  important: {
    fontFamily: FONT_FAMILIES.Inter_SemiBold,
    fontSize: FONT_SIZES.MEDIUM,
    fontWeight: FONT_WEIGHTS.MEDIUM,
    marginTop: SPACING_CONSTANTS.MEDIUM,
  },
  buttonContainer: {
    padding: SPACING_CONSTANTS.LARGE
  },
});