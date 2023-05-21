import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { UserTile } from '~components';
import {
  StyledSuggestionsBox,
  WhoToFollowTextBox,
} from '~containers/Suggestions/styles';
import { mapGithubUserDataToUserSchema } from '~src/api/adaptors/userMapper';
import { useLazyGetUsersQuery } from '~src/api/github/users';
import { toggleSnackbar } from '~store/slices/snackbarSlice';

const Suggestions = () => {
  const dispatch = useDispatch();
  const [getUsers, { data, isSuccess, isFetching, isError }] =
    useLazyGetUsersQuery();

  const [suggestionsData, setSuggestionsData] = useState<UserData[]>([]);
  const [suggestedUsers, setSuggestedUsers] = useState<UserData[]>([]);
  const [refetchResponseCount, setRefetchResponseCount] = useState(0);

  const getSuggestedUsers = async () => {
    try {
      await getUsers()
        .unwrap()
        .then((usersData) => {
          if (usersData) {
            const mappedSuggestionsData = usersData.map((user) =>
              mapGithubUserDataToUserSchema(user),
            );
            setSuggestionsData(mappedSuggestionsData);
            setSuggestedUsers(mappedSuggestionsData.slice(0, 3));
          }
        })
        .catch((error) => {
          dispatch(
            toggleSnackbar({
              snackbarMessage: error.error,
              severity: 'error',
            }),
          );
        });
    } catch (err) {
      const { data: errorData } = err as UserAPIError;

      dispatch(
        toggleSnackbar({
          snackbarMessage: errorData.message,
          severity: 'error',
        }),
      );
    }
  };

  useEffect(() => {
    getSuggestedUsers();
  }, []);

  useEffect(() => {
    if (refetchResponseCount >= 26) {
      getSuggestedUsers();

      if (data) {
        const mappedUserData = data.map((user) =>
          mapGithubUserDataToUserSchema(user),
        );

        setSuggestionsData(mappedUserData);
      }

      setRefetchResponseCount(0);
    }
  }, [refetchResponseCount]);

  const handleRemove = (username: string) => {
    setSuggestionsData((prevSuggestionsData) =>
      prevSuggestionsData.filter((user) => user.username !== username),
    );

    setSuggestedUsers((prevSuggestions) =>
      prevSuggestions.filter((user) => user.username !== username),
    );

    if (suggestionsData.length > 0) {
      const newUser = suggestionsData.find(
        (user) => !suggestedUsers.includes(user),
      );

      if (newUser) {
        setSuggestedUsers((prevSuggestions) => [...prevSuggestions, newUser]);
      }
    }

    setRefetchResponseCount((prevCount) => prevCount + 1);
  };

  const handleRefresh = () => {
    setSuggestionsData(suggestionsData.slice(3));
    setRefetchResponseCount((prevResponseCount) => prevResponseCount + 3);
  };

  useEffect(() => {
    setSuggestedUsers(suggestionsData.slice(0, 3));
  }, [suggestionsData]);

  return (
    <StyledSuggestionsBox>
      <WhoToFollowTextBox>
        {!isFetching && !isError && (
          <>
            <Typography variant="h3">Who to follow?</Typography>
            <IconButton onClick={handleRefresh} disabled={isFetching}>
              <RefreshIcon />
            </IconButton>
          </>
        )}
        {isFetching && (
          <Typography variant="h3">Loading Suggestions...</Typography>
        )}
        {isError && (
          <Typography variant="h3">Error loading suggestions...</Typography>
        )}
      </WhoToFollowTextBox>
      {isSuccess &&
        suggestedUsers.map((user) => {
          return (
            <UserTile
              key={user.username}
              userTileInfo={user}
              onRemove={handleRemove}
            />
          );
        })}
    </StyledSuggestionsBox>
  );
};

export default Suggestions;
