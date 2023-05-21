import { AlertColor } from '@mui/material';

export type SnackbarProps = {
  snackbarMessage: string;
  severity: AlertColor | '';
  isSnackbarOpen?: boolean;
};
