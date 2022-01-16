import {StyleSheet} from 'react-native';

export const SPACING_CONSTANTS = {
  SMALL: 5,
  MEDIUM: 10,
  LARGE: 15,
  X_LARGE: 20
};

export const COLORS = {
  BLUEISH: '#03071E',
  DARKISH: '#333333',
  NOT_SO_DARKISH: '#666',
  GREENISH: '#008000',
  OFFWHITE: '#f4f4f4',
  ORANGEISH: '#DC2F02',
  REDISH: '#D00000',
  JUSTWHITE: '#FFF',
};

export const FONT_FAMILIES = {
  Cairo_Light: 'Cairo_300Light',
  Cairo_Regular: 'Cairo_400Regular',
  Cairo_SemiBold: 'Cairo_600SemiBold',
  Inter_Light: 'Inter_300Light',
  Inter_Regular: 'Inter_400Regular',
  Inter_SemiBold: 'Inter_600SemiBold',
};

export const FONT_SIZES = {
  SMALL: 12,
  MEDIUM: 16,
  LARGE: 20,
  X_LARGE: 24
};

export const FONT_WEIGHTS = {
  LIGHT: '200',
  NORMAL: '300',
  MEDIUM: '600',
  HEAVY: '800'
};

export const CommonNavStyles = {
  headerStyle: {
    backgroundColor: COLORS.REDISH,
  },
  headerTintColor: COLORS.JUSTWHITE,
  headerTitleStyle: {
    fontWeight: FONT_WEIGHTS.MEDIUM,
  },
};

export const DetailScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    padding: 0
  },
  scrollView: {
    flexGrow: 1,
  },
  dividerStyle: {
    marginVertical: SPACING_CONSTANTS.MEDIUM,
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