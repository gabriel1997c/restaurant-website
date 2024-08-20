import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'theme';

export default function RestaurantTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
