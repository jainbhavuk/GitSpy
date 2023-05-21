import { pxToRem } from '~src/utilities';
import COLORS from '~theme/colors';
import BASE_FONT_SIZE from '~theme/constants';

const TYPOGRAPHY_CONFIG = {
  htmlFontSize: BASE_FONT_SIZE,
  h1: {
    fontSize: pxToRem(48),
    lineHeight: pxToRem(62.4),
    fontWeight: 700,
    color: COLORS.gray[900],
  },

  h2: {
    fontSize: pxToRem(30),
    lineHeight: pxToRem(30),
    fontWeight: 700,
    color: COLORS.gray[900],
  },

  h3: {
    fontSize: pxToRem(20),
    lineHeight: pxToRem(24),
    fontWeight: 600,
    color: COLORS.gray[900],
  },

  h4: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
    fontWeight: 600,
    color: COLORS.white,
  },

  h5: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
    fontWeight: 500,
    color: COLORS.gray[900],
  },

  body1: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
    fontWeight: 400,
    color: COLORS.gray[500],
  },

  subtitle1: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
    fontWeight: 500,
    color: COLORS.gray[500],
  },

  subtitle2: {
    fontSize: pxToRem(12),
    lineHeight: pxToRem(18),
    fontWeight: 400,
    color: COLORS.gray[500],
  },

  subtitle3: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(18),
    fontWeight: 900,
    color: COLORS.gray[900],
  },
};

export default TYPOGRAPHY_CONFIG;
