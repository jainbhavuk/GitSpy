import { createTheme } from '@mui/material';

import COLORS from '~theme/colors';
import TYPOGRAPHY_CONFIG from '~theme/typographyConfig';

const theme = createTheme({
  palette: {
    primary: {
      light: COLORS.green[100],
      main: COLORS.green[500],
      dark: COLORS.green[800],
    },
    secondary: {
      light: COLORS.gray[200],
      main: COLORS.gray[500],
      dark: COLORS.gray[900],
    },
    error: {
      main: COLORS.red[200],
      dark: COLORS.red[800],
    },
    info: {
      main: COLORS.blue[100],
      dark: COLORS.blue[800],
    },
  },
  typography: {
    ...TYPOGRAPHY_CONFIG,
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
});

export default theme;
