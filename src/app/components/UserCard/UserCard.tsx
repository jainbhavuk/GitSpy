import { LocationOn } from '@mui/icons-material';
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

import StyledUserCard from '~components/UserCard/styles';
import { UserCardProps } from '~components/UserCard/UserCard.types';
import PATHS from '~routes/paths';

const UserCard = ({
  avatarUrl,
  username,
  location,
  profileUrl,
  isLargeAvatar,
  variant,
}: UserCardProps) => {
  const theme = useTheme();

  const {
    typography: { pxToRem },
  } = theme;

  return (
    <StyledUserCard variant={variant}>
      {avatarUrl && (
        <Link to={avatarUrl} target="_blank">
          <Avatar
            src={avatarUrl}
            sx={{
              height: isLargeAvatar ? pxToRem(150) : pxToRem(100),
              width: isLargeAvatar ? pxToRem(150) : pxToRem(100),
            }}
          />
        </Link>
      )}
      <Typography variant="h3" noWrap sx={{ maxWidth: pxToRem(150) }}>
        <Link to={`${PATHS.USERS}/${username}`}>{username}</Link>
      </Typography>
      {location && (
        <Box
          sx={{
            display: 'flex',
            wordBreak: 'break-all',
          }}
        >
          <LocationOn />
          <Typography variant="h3">{location}</Typography>
        </Box>
      )}
      {profileUrl && (
        <Link to={profileUrl} target="_blank">
          <Typography variant="h3" noWrap sx={{ maxWidth: pxToRem(200) }}>
            User Profile Link
          </Typography>
        </Link>
      )}
    </StyledUserCard>
  );
};

export default UserCard;
