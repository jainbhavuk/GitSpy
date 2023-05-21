import { GITHUB_API_ENDPOINTS } from '~api/github/constants';
import { githubUsersApi } from '~api/github/users';

export const githubSearchApi = githubUsersApi.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query<SearchUser, string>({
      query: (username: string) => {
        return {
          username,
          url: `${GITHUB_API_ENDPOINTS.search}?q=${username}`,
          method: 'GET',
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLazySearchQuery, useSearchQuery } = githubSearchApi;
