import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { UserProfileCard } from '~components';
import Suggestions from '~containers/Suggestions';
import PATHS from '~routes/paths';
import { mapGithubUserDataToUserSchema } from '~src/api/adaptors/userMapper';
import { useLazyAuthQuery } from '~src/api/github/auth';
import { useLazyGetUserQuery } from '~src/api/github/users';
import {
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
  isOnSpecificPath,
} from '~src/utilities';
import { clearUserLoginInfo } from '~store/slices/authSlice';
import { toggleSnackbar } from '~store/slices/snackbarSlice';
import { LOCALSTORAGE_KEYS } from '~utilities/constants';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [getUserProfileDetails] = useLazyGetUserQuery();
  const [authenticateUserWithPAT, { isSuccess, isError }] = useLazyAuthQuery();

  const { pat }: UserLoginInfoProps = getItemFromLocalStorage(
    LOCALSTORAGE_KEYS.user,
  );
  const { user } = params;
  const isOnHomePage = isOnSpecificPath(PATHS.HOME);

  const [userCardInfo, setUserCardInfo] = useState({});
  const [usersDescriptionInfo, setUsersDescriptionInfo] = useState({});

  const validateUserOnPageReload = async () => {
    // try {
    //   await authenticateUserWithPAT(pat)
    //     .unwrap()
    //     .then(async (userData) => {
    //       try {
    //         await getUserProfileDetails(
    //           isOnHomePage ? (userData.login as string) : (user as string),
    //         )
    //           .unwrap()
    //           .then((data) => {
    //             showUserProfileDetails(data as GithubUser);
    //           });
    //       } catch (err) {
    //         const { data: errorData } = err as UserAPIError;

    //         dispatch(
    //           toggleSnackbar({
    //             snackbarMessage: errorData.message,
    //             severity: 'error',
    //           }),
    //         );
    //       }
    //     })
    //     .catch((error) => {
    //       const { data: errorData } = error as UserAPIError;

    //       dispatch(clearUserLoginInfo());
    //       removeItemFromLocalStorage(LOCALSTORAGE_KEYS.user);
    //       navigate(PATHS.LOGIN);
    //       dispatch(
    //         toggleSnackbar({
    //           snackbarMessage: errorData.message,
    //           severity: 'error',
    //         }),
    //       );
    //     });
    // } catch (err) {
    //   const { data: errorData } = err as UserAPIError;

    //   dispatch(
    //     toggleSnackbar({
    //       snackbarMessage: errorData.message,
    //       severity: 'error',
    //     }),
    //   );
    // }

    // 2nd approach

    try {
      const userData = await authenticateUserWithPAT(pat).unwrap();
      const userProfileData = await getUserProfileDetails(
        isOnHomePage ? (userData.login as string) : (user as string),
      ).unwrap();
      showUserProfileDetails(userProfileData as GithubUser);
    } catch (error) {
      const { data: errorData } = error as UserAPIError;

      dispatch(
        toggleSnackbar({
          snackbarMessage: errorData.message,
          severity: 'error',
        }),
      );

      if (isError) {
        dispatch(clearUserLoginInfo());
        removeItemFromLocalStorage(LOCALSTORAGE_KEYS.user);
        navigate(PATHS.LOGIN);
      }
    }
  };

  const showUserProfileDetails = (userData: GithubUser) => {
    const mappedData = mapGithubUserDataToUserSchema(userData);

    const { avatarUrl, username, location, isLargeAvatar } = mappedData;
    const { followers, following, email, bio, profileUrl } = mappedData;

    setUserCardInfo({
      avatarUrl,
      username,
      location,
      isLargeAvatar,
    });

    setUsersDescriptionInfo({
      followers,
      following,
      email,
      bio,
      profileUrl,
    });
  };

  useEffect(() => {
    validateUserOnPageReload();
  }, [user]);

  return (
    <>
      <Box>
        {isSuccess && (
          <UserProfileCard
            userCardInfo={userCardInfo}
            usersDescriptionInfo={usersDescriptionInfo}
          />
        )}
        {isError && (
          <Typography variant="h3">Failed to load user's profile</Typography>
        )}
        <Suggestions />
      </Box>
    </>
  );
};

export default HomePage;
