import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserLoginInfoProps = {
  username: '',
  pat: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUserLoginInfo: (state, action: PayloadAction<UserLoginInfoProps>) => {
      state.username = action.payload.username;
      state.pat = action.payload.pat;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    clearUserLoginInfo: (state) => {
      state.username = '';
      state.pat = '';
      state.isLoggedIn = false;
    },
  },
});

export const { clearUserLoginInfo, setUserLoginInfo } = authSlice.actions;

export default authSlice.reducer;
