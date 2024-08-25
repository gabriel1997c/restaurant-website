export const styles = {
  outerContainer: (theme) => ({
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
  paragraphs: {
    maxWidth: '75%',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    maxWidth: '700px',
  },
  mainHeader: (theme) => ({
    color: theme.palette.lemon.main,
  }),
};
