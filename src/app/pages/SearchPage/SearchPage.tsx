import { Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { StyledButton, UserCard } from '~components';
import {
  SearchResultsContainer,
  StyledForm,
  StyledSearchInput,
} from '~pages/SearchPage/styles';
import { mapGithubUserDataToUserSchema } from '~src/api/adaptors/userMapper';
import { useLazySearchQuery } from '~src/api/github/search';
import { toggleSnackbar } from '~store/slices/snackbarSlice';

const SearchPage = () => {
  const dispatch = useDispatch();
  const [getSearchResults, { isSuccess, isFetching }] = useLazySearchQuery();

  const [searchResults, setSearchResults] = useState<UserData[]>([]);
  const [searchText, setSearchText] = useState('');

  const handleSearchResults = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    try {
      if (searchText !== '') {
        const searchData = await getSearchResults(searchText).unwrap();

        const mappedData = searchData.items.map((user: GithubUser) =>
          mapGithubUserDataToUserSchema(user),
        );

        setSearchResults(mappedData);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      const { data } = err as UsersAPIError;

      dispatch(
        toggleSnackbar({
          snackbarMessage: data.message,
          severity: 'error',
        }),
      );
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setSearchResults([]);
    }

    setSearchText(e.target.value);
  };

  return (
    <>
      <StyledForm onSubmit={handleSearchResults}>
        <StyledSearchInput
          type="text"
          onChange={handleUsernameChange}
          placeholder="Enter username"
          disableUnderline
        />
        <StyledButton type="submit" disabled={isFetching}>
          Search
        </StyledButton>
      </StyledForm>
      <SearchResultsContainer>
        {isSuccess &&
          searchResults.map((result) => {
            return (
              <UserCard
                key={result.username}
                username={result.username}
                avatarUrl={result.avatarUrl}
                profileUrl={result.profileUrl}
                variant="user"
              />
            );
          })}
        {searchText !== '' && isFetching && searchResults.length === 0 && (
          <Typography variant="h3">Loading...</Typography>
        )}
        {searchResults.length === 0 &&
          searchText !== '' &&
          isSuccess &&
          !isFetching && (
            <Typography variant="h3">No Results Found...</Typography>
          )}
      </SearchResultsContainer>
    </>
  );
};

export default SearchPage;
