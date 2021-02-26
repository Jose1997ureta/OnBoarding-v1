import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  color1: '#1E1F20',
  color2: '#FFF',
  color3: '#6A6A6A',
  color4: '#0682FE',
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // FONT SIZES
  h1: 30,
  h2: 22,
  h3: 14,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // Dimension
  width,
  height,
};

export const FONTS = {
  h1: {fontFamily: 'UbuntuMono-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'UbuntuMono-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'UbuntuMono-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'UbuntuMono-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {
    fontFamily: 'UbuntuMono-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'UbuntuMono-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'UbuntuMono-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'UbuntuMono-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};

export const APPTHEME = {COLORS, SIZES, FONTS};
