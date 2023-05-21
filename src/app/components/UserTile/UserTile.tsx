import ClearIcon from '@mui/icons-material/Clear';
import { Avatar, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

import {
  StyledButton,
  StyledUserTileBox,
  StyledUsernameFollowBox,
  StyledViewProfileBox,
} from '~components/UserTile/styles';
import { UserTileProps } from '~components/UserTile/UserTile.types';
import PATHS from '~routes/paths';

const UserTile = ({
  userTileInfo: { avatarUrl, username, profileUrl },
  onRemove,
}: UserTileProps) => {
  const theme = useTheme();

  const {
    typography: { pxToRem },
  } = theme;

  return (
    <StyledUserTileBox>
      <Link to={avatarUrl ? avatarUrl : ''} style={{ alignSelf: 'center' }}>
        <Avatar src={avatarUrl} />
      </Link>
      <StyledUsernameFollowBox>
        <Typography variant="h3" noWrap sx={{ maxWidth: pxToRem(150) }}>
          <Link to={`${PATHS.USERS}/${username}`}>{username}</Link>
        </Typography>
        {/* // TODO: add onclick for follow functionality */}
        <StyledButton>Follow</StyledButton>
      </StyledUsernameFollowBox>
      <StyledViewProfileBox>
        <Link to={profileUrl ? profileUrl : ''} target="_blank">
          <Typography variant="h5">View profile</Typography>
        </Link>
        <IconButton
          sx={{ alignSelf: 'flex-start' }}
          onClick={() => onRemove(username as string)}
        >
          <ClearIcon />
        </IconButton>
      </StyledViewProfileBox>
    </StyledUserTileBox>
  );
};

export default UserTile;
