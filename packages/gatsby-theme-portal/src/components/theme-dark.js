import { createMuiTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

// Get Default breakpoints to define typograhy responsive behaviour
const breakpoints = createBreakpoints({});

const themeName = 'allthingshair';

const color = {
  primary: '#ccc',
  secondary: '#FFDDE1',
  tertiary: '#fed760',
  quaternary: '#F38D68',
  quinary: '#F38D68',
  grey: {
    light: '#333',
    lighter: 'rgba(0,0,0,.4)',
    dark: '#666',
    darker: '#999',
  },
  white: '#fff',
  black: '#000',
};

const typography = {
  fontFamily: 'Proxima Nova Alt',
  body2: {
    fontFamily: 'Proxima Nova Alt',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.6,
    color: color.white,
    letterSpacing: 0,
  },
};

const palette = {
  background: {
    default: color.black,
  },
  primary: {
    main: color.primary,
  },
  secondary: {
    main: color.secondary,
  },
  tertiary: {
    main: color.tertiary,
  },
  quaternary: {
    main: color.quaternary,
  },
  quinary: {
    main: color.quinary,
  },
  grey: {
    20: color.grey.lighter,
    50: color.grey.light,
    100: color.grey.dark,
    200: color.grey.darker,
  },
  common: {
    black: color.white,
    white: color.black,
  },
};

const overrides = {
  MuiCssBaseline: {},
  MuiTypography: {
    root: {
      margin: '0 0 .5rem',
    },
    h1: {
      fontFamily: 'Proxima Nova Alt',
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.1,
      letterSpacing: 0,
      [breakpoints.up('md')]: {
        fontSize: '2.875rem',
      },
    },
    h2: {
      fontFamily: 'Proxima Nova Alt',
      fontWeight: 600,
      fontSize: '1.375rem',
      lineHeight: 1.1,
      letterSpacing: 0,
      [breakpoints.up('md')]: {
        fontSize: '2.25rem',
      },
    },
  },
};

export default createMuiTheme({
  typography,
  palette,
  overrides,
  themeName,
});
