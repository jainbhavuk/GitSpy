import { Box, CircularProgress, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { mapGithubUserDataToUserSchema } from '~api/adaptors/userMapper';
import loginlogo from '~assets/images/loginuser.png';
import man from '~assets/images/man.jpg';
import { StyledButton } from '~components';
import {
  LoginContainer,
  StyledLoginBox,
  StyledForm,
  StyledInput,
} from '~pages/LoginPage/styles';
import PATHS from '~routes/paths';
import { useLazyAuthQuery } from '~src/api/github/auth';
import { setItemInLocalStorage } from '~src/utilities';
import { LOCALSTORAGE_KEYS } from '~src/utilities/constants';
import { setUserLoginInfo } from '~store/slices/authSlice';
import { toggleSnackbar } from '~store/slices/snackbarSlice';

const LoginPage = () => {
  const [authenticateUserWithPAT, { isFetching }] = useLazyAuthQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLoginInfo, setUserLoginInfoObj] = useState<UserLoginInfoProps>({
    username: '',
    pat: '',
    isLoggedIn: false,
  });

  const handleCredentialsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setUserLoginInfoObj({
      ...userLoginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userAuthData = await authenticateUserWithPAT(
        userLoginInfo.pat,
      ).unwrap();

      const user = mapGithubUserDataToUserSchema(userAuthData);

      if (user.username === userLoginInfo.username) {
        userLoginInfo.isLoggedIn = true;
        setUserLoginInfoObj(userLoginInfo);
        setItemInLocalStorage(LOCALSTORAGE_KEYS.user, userLoginInfo);
        dispatch(setUserLoginInfo(userLoginInfo));
        dispatch(
          toggleSnackbar({
            snackbarMessage: 'Successful Login',
            severity: 'success',
          }),
        );

        navigate(PATHS.HOME);
      } else {
        dispatch(
          toggleSnackbar({
            snackbarMessage: 'Invalid username',
            severity: 'error',
          }),
        );
      }
    } catch (error) {
      const { data: errorData } = error as UserAPIError;

      dispatch(
        toggleSnackbar({
          snackbarMessage: errorData.message,
          severity: 'error',
        }),
      );
    }
  };

  return (
    <LoginContainer>
      <Box display="flex" height="100%" gap="20">
        <Box flexBasis="60%" height="100%">
          <img
            src={man}
            alt="Background Image"
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </Box>
        <StyledLoginBox>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={loginlogo}
              alt="User Login Logo"
              style={{ width: '200px' }}
            />
          </Box>
          <StyledForm onSubmit={handleFormSubmit}>
            <Box>
              <label style={{ textAlign: 'center' }}>
                <Typography variant="h3">Username</Typography>
              </label>
              <StyledInput
                name="username"
                type="text"
                placeholder="Enter Username"
                onChange={handleCredentialsChange}
                required
              />
            </Box>
            <Box>
              <label style={{ textAlign: 'center' }}>
                <Typography variant="h3">Personal Access Token</Typography>
              </label>
              <StyledInput
                name="pat"
                type="password"
                placeholder="Enter PAT"
                onChange={handleCredentialsChange}
                required
              />
            </Box>
            <StyledButton type="submit" noBorderRadius disabled={isFetching}>
              {isFetching ? <CircularProgress color="secondary" /> : 'Login'}
            </StyledButton>
          </StyledForm>
        </StyledLoginBox>
      </Box>
    </LoginContainer>
  );
};

export default LoginPage;
