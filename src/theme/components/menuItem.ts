import type { Components, Theme } from '@mui/material';

const menuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.body3,
      color: theme.palette.primary.main,
    }),
  },
};

export default menuItem;
