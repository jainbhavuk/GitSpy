import { BoxProps } from '@mui/material';

export type UserCardProps = {
  avatarUrl?: string;
  username?: string;
  location?: string;
  profileUrl?: string;
  isLargeAvatar?: boolean;
  variant?: 'user';
};

export type StyledBoxProps = BoxProps & {
  variant?: 'user';
};
