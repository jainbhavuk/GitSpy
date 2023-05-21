import { Box, styled } from '@mui/material';

const StyledUserProfileCard = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
    palette,
  } = theme;

  return {
    width: pxToRem(600),
    minHeight: pxToRem(280),
    borderRadius: pxToRem(10),
    padding: pxToRem(5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: pxToRem(20),
    backgroundColor: palette.common.white,
    boxShadow: `${pxToRem(4)} ${pxToRem(3)} ${pxToRem(10)} ${
      palette.secondary.light
    },${pxToRem(3)} ${pxToRem(8)} ${pxToRem(10)} ${palette.secondary.light}`,
    margin: `${pxToRem(15)} auto`,
  };
});

export default StyledUserProfileCard;
