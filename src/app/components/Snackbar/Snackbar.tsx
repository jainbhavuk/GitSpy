import { Snackbar as SnackBar } from '@mui/material';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleSnackbar } from '~store/slices/snackbarSlice';
import { RootState } from '~store/store';

const Snackbar = () => {
  const dispatch = useDispatch();

  const { isSnackbarOpen, snackbarMessage, severity } = useSelector(
    (state: RootState) => state.snackbarSlice,
  );

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(toggleSnackbar({ snackbarMessage: '', severity: '' }));
  };

  return (
    <SnackBar
      open={isSnackbarOpen}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={severity !== '' ? (severity as AlertColor) : undefined}
      >
        {snackbarMessage}
      </Alert>
    </SnackBar>
  );
};

export default Snackbar;
