import { Button, styled } from '@mui/material';

import { StyledButtonProps } from '~components/StyledButton/StyledButton.types';

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== 'noBorderRadius' && prop !== 'logOutBtn',
})<StyledButtonProps>(({ theme, noBorderRadius = false, logOutBtn }) => {
  const {
    typography: { pxToRem },
    palette,
  } = theme;

  return {
    backgroundColor: logOutBtn ? palette.error.dark : palette.primary.main,
    width: pxToRem(139),
    height: pxToRem(45),
    color: palette.common.white,
    borderRadius: noBorderRadius ? 0 : pxToRem(13),
    padding: `${pxToRem(4)} ${pxToRem(10)}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    alignSelf: 'center',
    fontSize: pxToRem(20),

    '&:hover': {
      backgroundColor: palette.secondary.light,
      color: palette.secondary.dark,
    },
  };
});

export default StyledButton;
