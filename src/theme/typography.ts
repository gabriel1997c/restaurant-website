const typography = {
  fontFamily: ['Markazi Text', 'Karla'].join(','),
  fontWeightBold: 600,
  h1: {
    fontFamily: 'Markazi Text',
    fontSize: 54,
    fontWeight: 600,
    lineHeight: '60px',
    '@media (max-width:900px)': {
      fontSize: 50,
      lineHeight: '54px',
    },
    '@media (max-width:600px)': {
      fontSize: 46,
      lineHeight: '50px',
    },
    '@media (max-width:400px)': {
      fontSize: 42,
      lineHeight: '46px',
    },
  },
  h2: {
    fontFamily: 'Markazi Text',
    fontSize: 48,
    fontWeight: 600,
    lineHeight: '52px',
    '@media (max-width:900px)': {
      fontSize: 44,
      lineHeight: '48px',
    },
    '@media (max-width:600px)': {
      fontSize: 40,
      lineHeight: '44px',
    },
    '@media (max-width:400px)': {
      fontSize: 36,
      lineHeight: '40px',
    },
  },
  h3: {
    fontFamily: 'Markazi Text',
    fontSize: 40,
    fontWeight: 600,
    lineHeight: '42px',
    '@media (max-width:900px)': {
      fontSize: 36,
      lineHeight: '38px',
    },
    '@media (max-width:600px)': {
      fontSize: 32,
      lineHeight: '34px',
    },
    '@media (max-width:400px)': {
      fontSize: 28,
      lineHeight: '30px',
    },
  },
  subtitle1: {
    fontFamily: 'Markazi Text',
    fontSize: 28,
    fontWeight: 600,
    lineHeight: '30px',
    '@media (max-width:900px)': {
      fontSize: 26,
      lineHeight: '28px',
    },
    '@media (max-width:600px)': {
      fontSize: 24,
      lineHeight: '26px',
    },
    '@media (max-width:400px)': {
      fontSize: 22,
      lineHeight: '24px',
    },
  },
  subtitle2: {
    fontFamily: 'Markazi Text',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '26px',
    '@media (max-width:900px)': {
      fontSize: 22,
      lineHeight: '24px',
    },
    '@media (max-width:600px)': {
      fontSize: 20,
      lineHeight: '22px',
    },
    '@media (max-width:400px)': {
      fontSize: 18,
      lineHeight: '20px',
    },
  },
  subtitle3: {
    fontFamily: 'Markazi Text',
    fontSize: 22,
    fontWeight: 400,
    lineHeight: '24px',
    '@media (max-width:900px)': {
      fontSize: 20,
      lineHeight: '22px',
    },
    '@media (max-width:600px)': {
      fontSize: 18,
      lineHeight: '20px',
    },
    '@media (max-width:400px)': {
      fontSize: 16,
      lineHeight: '18px',
    },
  },
  body1: {
    fontFamily: 'Karla',
    fontSize: 32,
    fontWeight: 600,
    lineHeight: '34px',
    letterSpacing: '0.01px',
    '@media (max-width:900px)': {
      fontSize: 30,
      lineHeight: '32px',
    },
    '@media (max-width:600px)': {
      fontSize: 28,
      lineHeight: '30px',
    },
    '@media (max-width:400px)': {
      fontSize: 26,
      lineHeight: '28px',
    },
  },
  body2: {
    fontFamily: 'Karla',
    fontSize: 28,
    fontWeight: 400,
    lineHeight: '30px',
    letterSpacing: '0.03px',
    '@media (max-width:900px)': {
      fontSize: 26,
      lineHeight: '28px',
    },
    '@media (max-width:600px)': {
      fontSize: 24,
      lineHeight: '26px',
    },
    '@media (max-width:400px)': {
      fontSize: 22,
      lineHeight: '24px',
    },
  },
  body3: {
    fontFamily: 'Karla',
    fontSize: 24,
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.04px',
    '@media (max-width:900px)': {
      fontSize: 22,
      lineHeight: '24px',
    },
    '@media (max-width:600px)': {
      fontSize: 20,
      lineHeight: '22px',
    },
    '@media (max-width:400px)': {
      fontSize: 18,
      lineHeight: '20px',
    },
  },
  label1: {
    fontFamily: 'Karla',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '17px',
    letterSpacing: '0.01px',
    '@media (max-width:900px)': {
      fontSize: 15,
      lineHeight: '16px',
    },
    '@media (max-width:600px)': {
      fontSize: 14,
      lineHeight: '15px',
    },
    '@media (max-width:400px)': {
      fontSize: 13,
      lineHeight: '14px',
    },
  },
  label2: {
    fontFamily: 'Karla',
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '15px',
    letterSpacing: '0.05px',
    '@media (max-width:900px)': {
      fontSize: 13,
      lineHeight: '14px',
    },
    '@media (max-width:600px)': {
      fontSize: 12,
      lineHeight: '13px',
    },
    '@media (max-width:400px)': {
      fontSize: 11,
      lineHeight: '12px',
    },
  },
  button: {
    fontFamily: 'Karla',
    fontWeight: 600,
    textTransform: 'none' as const,
  },
};

export default typography;
