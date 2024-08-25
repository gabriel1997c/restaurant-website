export const styles = {
  customersSay: (theme) => ({
    [theme.breakpoints.down('md')]: {
      px: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
      px: theme.spacing(10),
    },
    [theme.breakpoints.up('lg')]: {
      px: theme.spacing(15),
    },
    backgroundColor: theme.palette.silver.darker,
  }),
};
