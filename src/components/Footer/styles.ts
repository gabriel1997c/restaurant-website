export const styles = {
  outerContainer: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      px: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      px: theme.spacing(10),
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      px: theme.spacing(15),
    },
  }),
  footerBar: (theme) => ({
    backgroundColor: theme.palette.silver.darker,
    color: theme.palette.primary.main,
    height: 'auto',
    padding: theme.spacing(2, 0),
  }),
  logoGridItem: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  logoImg: {
    height: 180,
    marginLeft: 0,
  },
  socialMedia: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1px',
  },
  iconHover: (theme) => ({
    '&:hover': {
      color: theme.palette.lemon.main,
    },
  }),
};
