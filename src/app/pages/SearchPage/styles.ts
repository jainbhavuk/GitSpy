import { Box, styled, Input } from '@mui/material';

const SearchResultsContainer = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    display: 'flex',
    gap: pxToRem(20),
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  };
});

const StyledForm = styled('form')(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;

  return {
    display: 'flex',
    justifyContent: 'center',
    gap: pxToRem(10),
  };
});

const StyledSearchInput = styled(Input)(({ theme }) => {
  const {
    typography: { pxToRem },
    palette,
  } = theme;

  return {
    padding: pxToRem(10),
    margin: `${pxToRem(20)} 0`,
    height: pxToRem(45),
    borderRadius: pxToRem(10),
    width: pxToRem(500),
    outline: 'none',
    border: `${pxToRem(1)} solid ${palette.primary.main}`,
    fontSize: pxToRem(16),
  };
});

export { SearchResultsContainer, StyledForm, StyledSearchInput };
