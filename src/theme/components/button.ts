import type { Components, Theme } from '@mui/material';

const button: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: {
      borderRadius: 60,
      boxShadow: 'none',
    },
    sizeSmall: ({ theme }) => ({
      ...theme.typography.label2,
      height: 22,
    }),
    sizeMedium: ({ theme }) => ({
      ...theme.typography.label1,
      height: 28,
    }),
    sizeLarge: ({ theme }) => ({
      ...theme.typography.label1,
      height: 36,
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
