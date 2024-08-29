import type { Components, Theme } from '@mui/material';

const formHelperText: Components<Theme>['MuiFormHelperText'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.label2,
      '&.Mui-error': {
        color: theme.palette.error.main,
      },
    }),
  },
};

export default formHelperText;
