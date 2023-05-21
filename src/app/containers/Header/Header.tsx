import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Box, Button, IconButton, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import logo from '~assets/images/gitspy.png';
import {
  StyledBox,
  StyledToolbar,
  StyledLink,
} from '~containers/Header/styles';
import PATHS from '~routes/paths';
import { isOnSpecificPath, removeItemFromLocalStorage } from '~src/utilities';
import { LOCALSTORAGE_KEYS } from '~src/utilities/constants';
import { clearUserLoginInfo } from '~store/slices/authSlice';
import { RootState } from '~store/store';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.authSlice);

  const isOnSearchPage = isOnSpecificPath(PATHS.SEARCH);

  const redirectToHome = () => {
    navigate(PATHS.HOME);
  };

  const handleLogout = () => {
    removeItemFromLocalStorage(LOCALSTORAGE_KEYS.user);
    dispatch(clearUserLoginInfo());
    navigate(PATHS.LOGIN);
  };

  return (
    <Box>
      <AppBar>
        <StyledToolbar>
          <IconButton onClick={redirectToHome}>
            <img src={logo} alt="Github Logo" height={50} />
          </IconButton>
          <StyledBox>
            {!isOnSearchPage && (
              <StyledLink to={PATHS.SEARCH}>SEARCH USER</StyledLink>
            )}
            {isLoggedIn && (
              <Tooltip title="Log out!">
                <Button color="inherit" onClick={handleLogout}>
                  <LogoutIcon />
                </Button>
              </Tooltip>
            )}
          </StyledBox>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
