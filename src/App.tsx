import { CssBaseline, ThemeProvider } from '@mui/material';

import AppLayout from '~layouts/AppLayout';
import theme from '~theme/theme.js';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
