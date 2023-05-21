import UserCard from '~components/UserCard/UserCard';
import UserDescriptionCard from '~components/UserDescriptionCard/UserDescriptionCard';
import StyledUserProfileCard from '~components/UserProfileCard/styles';
import { UserProfileCardProps } from '~components/UserProfileCard/UserProfileCard.types';

const UserProfileCard = ({
  userCardInfo: {
    avatarUrl,
    username,
    location,
    profileUrl: userProfileUrl,
    isLargeAvatar,
  },
  usersDescriptionInfo: { followers, following, email, bio, profileUrl },
}: UserProfileCardProps) => {
  return (
    <StyledUserProfileCard>
      <UserCard
        avatarUrl={avatarUrl}
        username={username}
        location={location}
        isLargeAvatar={isLargeAvatar}
        profileUrl={userProfileUrl}
      />
      <UserDescriptionCard
        followers={followers}
        following={following}
        email={email}
        bio={bio}
        profileUrl={profileUrl}
      />
    </StyledUserProfileCard>
  );
};

export default UserProfileCard;
