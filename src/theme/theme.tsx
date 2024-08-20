import { Theme } from '@mui/material';
import { createTheme } from '@mui/material/styles';



import { MuiButton, MuiCssBaseline } from './components';
import './fonts/fonts.css';
import palette from './palette';
import typography from './typography';


const theme: Theme = createTheme({
  palette,
  typography,
  components: {
    MuiCssBaseline,
    MuiButton,
  },
});

export default theme;