import { Box, styled } from '@mui/material';

const StyledCountCard = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
    palette,
  } = theme;

  return {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxToRem(5),
    padding: pxToRem(10),
    maxWidth: pxToRem(130),
    maxHeight: pxToRem(70),
    margin: `${pxToRem(1)} ${pxToRem(10)}`,
    color: palette.common.white,
    backgroundColor: palette.primary.main,
  };
});

export default StyledCountCard;
