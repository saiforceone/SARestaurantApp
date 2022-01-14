import {StyleSheet} from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING_CONSTANTS } from '../../../constants/styleConstants';

const ListItemCardStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.OFFWHITE,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: SPACING_CONSTANTS.MEDIUM,
    marginHorizontal: SPACING_CONSTANTS.MEDIUM,
    minHeight: 100,
    paddingHorizontal: SPACING_CONSTANTS.MEDIUM,
    paddingVertical: SPACING_CONSTANTS.SMALL,
  },
  image: {
    borderRadius: 5,
    height: 60,
    marginRight: SPACING_CONSTANTS.MEDIUM,
    resizeMode: 'cover',
    width: 60,
  },
  contentContainer: {
    flex: 1
  },
  title: {
    color: COLORS.DARKISH,
    fontSize: FONT_SIZES.X_LARGE,
    fontWeight: FONT_WEIGHTS.HEAVY,
  },
  details: {
    color: COLORS.DARKISH,
    marginTop: SPACING_CONSTANTS.SMALL,
  },
  extraContentContainer: {
    marginTop: SPACING_CONSTANTS.SMALL,
  }
});

export default ListItemCardStyles;