import { Typography, useTheme } from '@mui/material';

import { CountCardProps } from '~components/CountCard/CountCard.types';
import StyledCountCard from '~components/CountCard/styles';

const CountCard = ({ count, countTitle }: CountCardProps) => {
  const theme = useTheme();

  const {
    typography: { pxToRem },
  } = theme;

  return (
    <StyledCountCard>
      <Typography variant="h4" noWrap sx={{ maxWidth: pxToRem(80) }}>
        {count}
      </Typography>
      <Typography variant="h4">{countTitle}</Typography>
    </StyledCountCard>
  );
};

export default CountCard;
