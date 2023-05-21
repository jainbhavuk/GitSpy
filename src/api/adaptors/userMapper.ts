/**
 * Maps the user model object from api to a custom model object
 * @param obj object being received from api
 * @returns object having keys as needed in the application
 */
export const mapGithubUserDataToUserSchema = (
  objFromApi: GithubUser,
): UserData => ({
  username: objFromApi['login'],
  avatarUrl: objFromApi['avatar_url'],
  profileUrl: objFromApi['html_url'],
  followersUrl: objFromApi['followers_url'],
  followingUrl: objFromApi['following_url'],
  name: objFromApi['name'],
  location: objFromApi['location'],
  email: objFromApi['email'],
  bio: objFromApi['bio'],
  followers: objFromApi['followers'],
  following: objFromApi['following'],
  isLargeAvatar: objFromApi['isLargeAvatar'],
});
