import { Box, Link, styled } from '@mui/material';

const ImgWrapper = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    maxWidth: pxToRem(600),
  };
});

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledLink = styled(Link)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    textDecoration: 'none',
    marginTop: pxToRem(20),
    fontSize: pxToRem(20),

    '&:hover': {
      color: theme.palette.secondary.main,
    },
  };
});

export { StyledBox, StyledLink, ImgWrapper };
