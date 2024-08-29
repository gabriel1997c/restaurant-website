export const styles = {
  outerBox: (theme) => ({
    [theme.breakpoints.down('md')]: {
      px: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
      px: theme.spacing(10),
    },
    [theme.breakpoints.up('lg')]: {
      px: theme.spacing(15),
    },
    py: theme.spacing(5),
    width: '100%',
    backgroundColor: theme.palette.silver.main,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  }),
};
