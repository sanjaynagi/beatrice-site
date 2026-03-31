import { extendTheme, theme as base } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const colors = {
  brand: {
    background: '#f7f4ed',
    surface: '#fdfaf4',
    accent: '#1f5a53',
    accentMuted: '#577c76',
    text: '#17322f',
    border: '#d9d2c5'
  }
};

const styles = {
  global: {
    body: {
      bg: 'brand.background',
      color: 'brand.text'
    },
    '::selection': {
      background: '#cfe0db'
    },
    a: {
      color: 'brand.accent'
    }
  }
};

const components = {
  Heading: {
    baseStyle: {
      color: 'brand.text',
      fontWeight: '600',
      letterSpacing: '-0.02em'
    },
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: 'brand.accentMuted',
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Text: {
    baseStyle: {
      color: 'brand.text'
    }
  },
  Link: {
    baseStyle: {
      color: 'brand.accent'
    }
  }
};

const fonts = {
  heading: `'Lora', ${base.fonts.heading}`,
  body: `'Lora', ${base.fonts.body}`
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
