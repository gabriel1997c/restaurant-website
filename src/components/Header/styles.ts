export const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    px: 12,
    py: 1,
  },
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
    backgroundColor: theme.palette.silver.lighter,
  }),
  drawer: (theme) => ({
    display: { xs: 'block', sm: 'block', md: 'none' },
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.silver.main,
      boxSizing: 'border-box',
      width: 220,
      height: 'auto',
      py: 1,
    },
  }),
};
