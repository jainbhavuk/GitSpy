import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SnackbarProps } from '~store/slices/slices.types';

const initialState = {
  isSnackbarOpen: false,
  snackbarMessage: '',
  severity: '',
};

const snackbarSlice = createSlice({
  name: 'snackbarSlice',
  initialState,
  reducers: {
    toggleSnackbar: (state, action: PayloadAction<SnackbarProps>) => {
      state.isSnackbarOpen = !state.isSnackbarOpen;
      state.snackbarMessage = action.payload.snackbarMessage;
      state.severity = action.payload.severity;
    },
  },
});

export const { toggleSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
