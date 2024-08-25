export const styles = {
  outerContainer: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      px: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
      px: theme.spacing(10),
    },
    [theme.breakpoints.up('lg')]: {
      px: theme.spacing(15),
    },
    py: theme.spacing(1),
  }),
  logoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navLinksContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  listItems: {
    display: 'inline',
  },
  appBar: (theme) => ({
    backgroundColor: theme.palette.silver.darker,
  }),
  drawer: (theme) => ({
    display: { xs: 'block', sm: 'block', md: 'none' },
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.silver.lighter,
      boxSizing: 'border-box',
      width: 220,
      height: 'auto',
      py: theme.spacing(1),
      textAlign: 'center',
    },
  }),
};
