import { Box, styled } from '@mui/material';

const LoginContainer = styled(Box)(() => {
  return {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#C3E8F1',
  };
});

const StyledLoginBox = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
    palette,
  } = theme;

  return {
    width: pxToRem(340),
    height: '100%',
    padding: pxToRem(15),
    backgroundColor: palette.primary.light,
    boxShadow: `0 ${pxToRem(2)} ${pxToRem(30)} ${pxToRem(1)} ${
      theme.palette.secondary.main
    },0 ${pxToRem(1)} ${pxToRem(1)} ${palette.secondary.light}`,
    borderRadius: pxToRem(5),
    flexBasis: '40%',
  };
});

const StyledForm = styled('form')(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    padding: pxToRem(15),
    display: 'flex',
    flexDirection: 'column',
    gap: pxToRem(30),
  };
});

const StyledInput = styled('input')(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    padding: pxToRem(10),
    width: '100%',
    height: pxToRem(40),
    border: 0,
    marginTop: pxToRem(10),
    borderRadius: pxToRem(5),
    outline: 'none',
    fontSize: pxToRem(16),
  };
});

export { LoginContainer, StyledLoginBox, StyledForm, StyledInput };
