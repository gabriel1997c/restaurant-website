export const styles = {
  customersSay: (theme) => ({
    [theme.breakpoints.down('md')]: {
      px: 5,
    },
    [theme.breakpoints.up('md')]: {
      px: 10,
    },
    [theme.breakpoints.up('lg')]: {
      px: 15,
    },
    backgroundColor: theme.palette.silver.darker,
  }),
};
