import { Typography } from '@mui/material';

import errorImg from '~assets/images/404.svg';
import { StyledBox, ImgWrapper, StyledLink } from '~pages/ErrorPage/styles';
import PATHS from '~routes/paths';

const ErrorPage = () => {
  return (
    <StyledBox>
      <ImgWrapper>
        <img src={errorImg} alt="Page Not Found" style={{ width: '100%' }} />
      </ImgWrapper>
      <Typography variant="h2">Page Not Found</Typography>
      <StyledLink href={PATHS.HOME}>Back To Home</StyledLink>
    </StyledBox>
  );
};

export default ErrorPage;
