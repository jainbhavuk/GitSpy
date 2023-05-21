import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, Link, Typography } from '@mui/material';

import CountCard from '~components/CountCard';
import {
  StyledBioText,
  StyledEmailBox,
  StyledUserDescriptionCard,
} from '~components/UserDescriptionCard/styles';
import { UserDescriptionProps } from '~components/UserDescriptionCard/UserDescription.types';

const UserDescriptionCard = ({
  followers,
  following,
  profileUrl,
  email,
  bio,
}: UserDescriptionProps) => {
  const mailTo = `mailto:${email}`;

  return (
    <StyledUserDescriptionCard>
      <Box>
        <CountCard count={followers} countTitle="Followers" />
        <CountCard count={following} countTitle="Following" />
      </Box>

      <Link href={mailTo} underline="none">
        <StyledEmailBox>
          <Typography variant="h3" align="center">
            {email}
          </Typography>
        </StyledEmailBox>
      </Link>
      <Link href={profileUrl} target="_blank">
        <Typography variant="h3">
          Go To Profile <ArrowOutwardIcon />
        </Typography>
      </Link>
      <StyledBioText variant="h5">{bio}</StyledBioText>
    </StyledUserDescriptionCard>
  );
};

export default UserDescriptionCard;
