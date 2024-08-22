const typography = {
  fontFamily: ['Markazi Text', 'Karla'].join(','),
  fontWeightBold: 600,
  h1: {
    fontSize: 54,
    fontWeight: 600,
    lineHeight: '60px',
  },
  h2: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: '54px',
  },
  h3: {
    fontSize: 40,
    fontWeight: 600,
    lineHeight: '46px',
  },
  body1: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: '36px',
    letterSpacing: '0.01px',
  },
  body2: {
    fontSize: 28,
    fontWeight: 400,
    lineHeight: '30px',
    letterSpacing: '0.03px',
  },
  body3: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: '28px',
    letterSpacing: '0.04px',
  },
  subtitle1: {
    fontSize: 28,
    fontWeight: 600,
    lineHeight: '32px',
  },
  subtitle2: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '28px',
  },
  subtitle3: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '24px',
  },
  label1: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '0.01px',
  },
  label2: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '0.05px',
  },
  button: {
    fontFamily: 'Karla',
    fontWeight: 600,
    textTransform: 'none' as const,
  },
};

export default typography;
