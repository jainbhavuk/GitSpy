import { Box, styled } from '@mui/material';

const StyledSuggestionsBox = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: pxToRem(300),
    marginTop: pxToRem(30),
  };
});

const WhoToFollowTextBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export { StyledSuggestionsBox, WhoToFollowTextBox };
