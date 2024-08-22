import { Dimensions as DefaultDimensions } from 'react-native';

// Color pallete.
const primaryColor = '#070f18';
const secondaryColor = '#0a7ea4';
const lightColor = '#fbfbfb';
const darkColor = '#000';
const grayColor = '#8b8989';
const lightGrayColor = '#b2b2b2';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    primary: primaryColor,
    secondary: secondaryColor,
    icon: grayColor,
    tabIconDefault: grayColor,
    tabIconSelected: secondaryColor,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    primary: primaryColor,
    secondary: secondaryColor,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: secondaryColor,
  },
};

// Shadow styles.
export const Shadows = {
  light: {
    shadowColor: Colors.dark,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: Colors.dark,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

// Screen dimensions and font sizes.
const { width, height } = DefaultDimensions.get('window');

export const Dimensions = {
  width,
  height,
  titleFontSize: 32,
  heading2FontSize: 24,
  heading3FontSize: 18,
  bodyFontSize: 14,
  captionFontSize: 12,
  borderRadius: 16,
  borderWidth: 1,
  iconSize: 28,
};

// Spacing values for layout consistency.
export const Spacing = {
  small: 8,
  medium: 18,
  large: 24,
  extraLarge: 40,
};
