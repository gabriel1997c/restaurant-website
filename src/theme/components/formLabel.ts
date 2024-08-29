import type { Components, Theme } from '@mui/material';


const formLabel: Components<Theme>['MuiFormLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.body3,
      color: theme.palette.primary.main,

      '&.Mui-focused:not(.Mui-error)': {
        color: theme.palette.primary.main,
      },
      '&.Mui-focused:.Mui-error': {
        color: theme.palette.error.main,
      },
    }),
  },
};

export default formLabel;