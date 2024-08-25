export const styles = {
  outerContainer: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      px: 5,
    },
    [theme.breakpoints.up('md')]: {
      px: 10,
    },
    [theme.breakpoints.up('lg')]: {
      px: 15,
    },
    py: 1,
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
      py: 1,
      textAlign: 'center',
    },
  }),
};
