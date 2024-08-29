const inputBase = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.body2,

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: 1.5,
      },

      '&.Mui-error': {
        '& fieldset.MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.error.main,
          borderWidth: 3,
        },
      },

      '&.Mui-focused': {
        '& fieldset.MuiOutlinedInput-notchedOutline': {
          borderWidth: 3,
        },
      },
    }),
    input: ({ theme }) => ({
      color: theme.palette.primary.main,
    }),
  },
};

export default inputBase;
