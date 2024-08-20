import '@mui/material';
import '@mui/material/styles';


declare module '@mui/material/styles' {
  interface Palette {
    lemon: Palette['primary'];
    pink: Palette['primary'];
    silver: Palette['primary'];
    charcoal: Palette['primary'];
  }

  interface PaletteOptions {
    lemon?: PaletteOptions['primary'];
    pink?: PaletteOptions['primary'];
    silver?: PaletteOptions['primary'];
    charcoal?: PaletteOptions['primary'];
  }

  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }

  interface TypographyVariants {
    body3?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
    label1?: React.CSSProperties;
    label2?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
    label1?: React.CSSProperties;
    label2?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    subtitle3: true;
    label1: true;
    label2: true;
  }
}

declare module '@mui/material' {
  interface Color {
    lighter?: string;
    darker?: string;
  }
}