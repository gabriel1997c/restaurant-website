export const styles = {
  specials: (theme) => ({
    [theme.breakpoints.down('md')]: {
      px: 5,
    },
    [theme.breakpoints.up('md')]: {
      px: 10,
    },
    [theme.breakpoints.up('lg')]: {
      px: 15,
    },
    backgroundColor: theme.palette.silver.main,
  }),
  specialsHeader: (theme) => ({
    color: theme.palette.charcoal.main,
  }),
};
