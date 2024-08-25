export const styles = {
  specials: (theme) => ({
    [theme.breakpoints.down('md')]: {
      px: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
      px: theme.spacing(10),
    },
    [theme.breakpoints.up('lg')]: {
      px: theme.spacing(15),
    },
    backgroundColor: theme.palette.silver.main,
  }),
  specialsHeader: (theme) => ({
    color: theme.palette.charcoal.main,
  }),
};
