import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes as RoutePaths } from 'react-router-dom';

import { ProtectedRoute, Snackbar } from '~components';
import { ErrorPage, HomePage, LoginPage, SearchPage } from '~pages';
import PATHS from '~routes/paths';
import { getItemFromLocalStorage } from '~src/utilities';
import { setUserLoginInfo } from '~store/slices/authSlice';
import { RootState } from '~store/store';
import { LOCALSTORAGE_KEYS } from '~utilities/constants';

const Routes = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch();

  const isUserPresentInLocalStorage =
    getItemFromLocalStorage(LOCALSTORAGE_KEYS.user) !== null;
  const hasAccessToLoginPage = !isLoggedIn && !isUserPresentInLocalStorage;

  const { ERROR, HOME, LOGIN, SEARCH, USERS } = PATHS;

  useEffect(() => {
    if (!isLoggedIn && isUserPresentInLocalStorage) {
      dispatch(
        setUserLoginInfo(getItemFromLocalStorage(LOCALSTORAGE_KEYS.user)),
      );
    }
  }, [isLoggedIn, isUserPresentInLocalStorage]);

  return (
    <>
      <RoutePaths>
        <Route
          path={LOGIN}
          element={
            <ProtectedRoute
              component={<LoginPage />}
              isAllowed={hasAccessToLoginPage}
              redirectPath={HOME}
            />
          }
        />
        <Route
          path={HOME}
          element={
            <ProtectedRoute
              component={<HomePage />}
              isAllowed={isUserPresentInLocalStorage}
              redirectPath={PATHS.LOGIN}
            />
          }
        />

        <Route path={USERS}>
          <Route path=":user" element={<HomePage />} />
        </Route>

        <Route path={SEARCH} element={<SearchPage />} />
        <Route path={ERROR} element={<ErrorPage />} />
      </RoutePaths>
      <Snackbar />
    </>
  );
};

export default Routes;
