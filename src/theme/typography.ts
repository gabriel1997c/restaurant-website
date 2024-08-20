const typography = {
  fontFamily: ['Markazi Text', 'Karla'].join(','),
  fontWeightBold: 600,
  h1: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: '52px',
  },
  h2: {
    fontSize: 36,
    fontWeight: 600,
    lineHeight: '42px',
  },
  h3: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: '32px',
  },
  body1: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '26px',
    letterSpacing: '0.01px',
  },
  body2: {
    fontSize: 22,
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.03px',
  },
  body3: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: '22px',
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
