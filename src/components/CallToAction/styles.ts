export const styles = {
  hero: (theme) => ({
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      px: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
      px: theme.spacing(10),
    },
    [theme.breakpoints.up('lg')]: {
      px: theme.spacing(15),
    },
    px: theme.spacing(2),
    color: theme.palette.silver.main,
    position: 'relative',
  }),
  banner: {
    maxWidth: '80%',
  },
  bannerImageBox: {
    zIndex: 10,
    maxWidth: 300,
    display: 'flex',
    mb: -16,
  },
  mainHeader: (theme) => ({
    color: theme.palette.lemon.main,
  }),
};
