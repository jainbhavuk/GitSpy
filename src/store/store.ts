import { configureStore } from '@reduxjs/toolkit';

import { githubAuthApi } from '~api/github/auth';
import { githubUsersApi } from '~api/github/users';
import { authSlice, snackbarSlice } from '~store/slices';

export const store = configureStore({
  reducer: {
    [githubUsersApi.reducerPath]: githubUsersApi.reducer,
    authSlice,
    snackbarSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      githubUsersApi.middleware,
      githubAuthApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
