import type { Components, Theme } from '@mui/material';

const button: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: {
      borderRadius: 60,
      boxShadow: 'none',
      minWidth: 0,
    },
    sizeSmall: ({ theme }) => ({
      ...theme.typography.label2,
      height: 22,
    }),
    sizeMedium: ({ theme }) => ({
      ...theme.typography.label1,
      height: 24,
    }),
    sizeLarge: ({ theme }) => ({
      ...theme.typography.label1,
      height: 30,
    }),
    textPrimary: ({ theme }) => ({
      '&:not(.Mui-disabled):hover': {
        backgroundColor: theme.palette.lemon.main,
        color: theme.palette.primary.main,
      },
    }),
  },
  defaultProps: {
    size: 'medium',
  },
};

export default button;
