import { Box, styled } from '@mui/material';

import PATHS from '~routes/paths';
import { isOnSpecificPath } from '~src/utilities';

const AppLayoutWrapper = styled(Box)(({ theme }) => {
  const onLoginPage = isOnSpecificPath(PATHS.LOGIN);

  const {
    typography: { pxToRem },
  } = theme;

  return {
    marginTop: !onLoginPage ? pxToRem(75) : 0,
  };
});

export { AppLayoutWrapper };
