export const styles = {
  hero: (theme) => ({
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      px: 5,
    },
    [theme.breakpoints.up('md')]: {
      px: 10,
    },
    [theme.breakpoints.up('lg')]: {
      px: 15,
    },
    py: 2,
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
