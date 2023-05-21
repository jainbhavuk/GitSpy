import { Box, styled, Typography } from '@mui/material';

const StyledUserDescriptionCard = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: pxToRem(10),
    width: pxToRem(400),
    minHeight: pxToRem(230),
    gap: pxToRem(20),
  };
});

const StyledBioText = styled(Typography)(() => {
  return {
    textAlign: 'center',
    wordBreak: 'break-all',
  };
});

const StyledEmailBox = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: pxToRem(5),
    width: '100%',
    wordBreak: 'break-all',
  };
});

export { StyledBioText, StyledEmailBox, StyledUserDescriptionCard };
