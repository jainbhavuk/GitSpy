import { Box, Button, styled } from '@mui/material';

const StyledUserTileBox = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
    palette,
  } = theme;

  return {
    width: pxToRem(400),
    height: pxToRem(70),
    borderRadius: pxToRem(10),
    backgroundColor: palette.common.white,
    boxShadow: `${pxToRem(4)} ${pxToRem(3)} ${pxToRem(10)} ${
      palette.secondary.light
    },${pxToRem(5)} ${pxToRem(5)} ${pxToRem(20)} ${palette.secondary.light}`,
    margin: pxToRem(8),
    padding: `${pxToRem(8)} ${pxToRem(10)}`,
    display: 'flex',
    gap: pxToRem(10),
  };
});

const StyledUsernameFollowBox = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: pxToRem(2),
    minWidth: pxToRem(180),
  };
});

const StyledButton = styled(Button)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    width: pxToRem(40),
    height: pxToRem(30),
    padding: pxToRem(2),
    borderRadius: pxToRem(5),
    textTransform: 'none',
  };
});

const StyledViewProfileBox = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    display: 'flex',
    gap: pxToRem(10),
    alignItems: 'center',
  };
});

export {
  StyledButton,
  StyledUserTileBox,
  StyledUsernameFollowBox,
  StyledViewProfileBox,
};
