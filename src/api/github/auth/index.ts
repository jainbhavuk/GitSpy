import { GITHUB_API_ENDPOINTS } from '~api/github/constants';
import { githubUsersApi } from '~api/github/users';

export const githubAuthApi = githubUsersApi.injectEndpoints({
  endpoints: (builder) => ({
    auth: builder.query<GithubUser, string>({
      query: (pat: string) => {
        return {
          url: GITHUB_API_ENDPOINTS.user,
          pat,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${pat}`,
          },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLazyAuthQuery } = githubAuthApi;
