export const styles = {
  customerSaysCard: (theme) => ({
    gridColumn: 'auto',
    gridRow: 2,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    pt: 3,
    backgroundColor: theme.palette.secondary.darker,
    borderRadius: 8,
    textAlign: 'center',
  }),
  rating: (theme) => ({
    color: theme.palette.lemon.main,
  }),
  personImg: {
    width: 120,
    margin: '0 auto 0.5rem auto',
    borderRadius: '50%',
  },
};
