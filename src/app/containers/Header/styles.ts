import { Box, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme }) => {
  const { palette } = theme;

  return {
    color: palette.common.white,
    textDecoration: 'none',

    ':hover': {
      color: palette.secondary.dark,
    },
  };
});

const StyledBox = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    display: 'flex',
    gap: pxToRem(3),
    alignItems: 'center',
  };
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

export { StyledBox, StyledToolbar, StyledLink };
