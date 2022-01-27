import {StyleSheet} from 'react-native';
import { COLORS, FONT_FAMILIES, FONT_SIZES } from '../../../constants/styleConstants';

export default StyleSheet.create({
  outerContainer: {
    width: '100%'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 400
  },
  title: {
    color: COLORS.DARKISH,
    fontSize: FONT_SIZES.LARGE,
    fontFamily: FONT_FAMILIES.Inter_Light,
  },
  details: {
    color: COLORS.NOT_SO_DARKISH,
    fontSize: FONT_SIZES.MEDIUM,
    fontFamily: FONT_FAMILIES.Inter_SemiBold,
  },
});
