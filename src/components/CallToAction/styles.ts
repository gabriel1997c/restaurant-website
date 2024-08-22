export const styles = {
  hero: (theme) => ({
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    px: 12,
    py: 2,
    color: theme.palette.silver.main,
    position: 'relative',
  }),
  banner: {
    maxWidth: '50%',
  },
  bannerImageBox: {
    flex: 1,
    minWidth: 300,
    maxWidth: 350,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
    mb: -16,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    maxWidth: '500px',
    borderRadius: '20px',
  },
  mainHeader: (theme) => ({
    color: theme.palette.lemon.main,
  }),
};
