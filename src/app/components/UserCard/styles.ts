import { styled, Box } from '@mui/material';

import { StyledBoxProps } from '~components/UserCard/UserCard.types';

const StyledUserCard = styled(Box)<StyledBoxProps>(({ theme, variant }) => {
  const {
    typography: { pxToRem },
    palette: { secondary },
  } = theme;

  return {
    width: pxToRem(250),
    minHeight: pxToRem(250),
    display: 'flex',
    margin: pxToRem(10),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: pxToRem(15),
    boxShadow:
      variant === 'user'
        ? `${pxToRem(4)} ${pxToRem(3)} ${pxToRem(10)} ${
            secondary.light
          },${pxToRem(5)} ${pxToRem(5)} ${pxToRem(20)} ${secondary.light}`
        : 'none',
  };
});

export default StyledUserCard;
