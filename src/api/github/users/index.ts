import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GITHUB_API_ENDPOINTS } from '~api/github/constants';
import { API_BASE_URLS } from '~src/api/constants';
import { getItemFromLocalStorage } from '~src/utilities';

export const githubUsersApi = createApi({
  reducerPath: 'githubUsers',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URLS.github,
    prepareHeaders: (headers) => {
      if (getItemFromLocalStorage('user') !== null) {
        const { pat } = getItemFromLocalStorage('user');

        if (pat) {
          headers.set('Authorization', `Bearer ${pat}`);
        }
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserData[], void>({
      query: () => {
        return {
          url: `${GITHUB_API_ENDPOINTS.users}?since=${
            Math.random() * 10000000
          }`,
          method: 'GET',
        };
      },
    }),
    getUser: builder.query<UserData[], string>({
      query: (username: string) => {
        return {
          url: `${GITHUB_API_ENDPOINTS.users}/${username}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery, useLazyGetUserQuery } =
  githubUsersApi;
