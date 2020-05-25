import { withStyles } from '@material-ui/core';
import ProximaRegularWoff2 from '../fonts/ProximaNovaAltRegular.woff2';
import ProximaRegularWoff from '../fonts/ProximaNovaAltRegular.woff';
import ProximaLightWoff2 from '../fonts/ProximaNovaAltLight.woff2';
import ProximaLightWoff from '../fonts/ProximaNovaAltLight.woff';
import ProximaBoldWoff2 from '../fonts/ProximaNovaAltBold.woff2';
import ProximaBoldWoff from '../fonts/ProximaNovaAltBold.woff';

const ProximaRegular = {
  fontFamily: 'Proxima Nova Alt',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    url(${ProximaRegularWoff2}) format('woff2'), url(${ProximaRegularWoff}) format('woff')
  `,
};
const ProximaRegularLight = {
  fontFamily: 'Proxima Nova Alt',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `
    url(${ProximaLightWoff2}) format('woff2'), url(${ProximaLightWoff}) format('woff')
  `,
};
const ProximaRegularBold = {
  fontFamily: 'Proxima Nova Alt',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `
    url(${ProximaBoldWoff2}) format('woff2'), url(${ProximaBoldWoff}) format('woff')
  `,
};

const styles = () => ({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      fontSmoothing: 'antialiased',
    },
    '*:focus': {
      outline: '1px dashed #ff3366',
    },
    html: {
      fontFamily: 'sans-serif',
      lineHeight: 1.15,
    },
    body: {
      overflowX: 'hidden',
      fontFamily: [
        'Proxima Nova Alt',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#333',
      textAlign: 'left',
      backgroundColor: 'white',
    },
    'h1,h2,h3': {
      marginBottom: '0.5rem',
      fontWeight: 600,
      lineHeight: 1.1,
      color: '#000',
      marginTop: 0,
    },
    '.img-responsive': {
      maxWidth: '100%',
      width: '100%',
      display: 'block',
    },
    iframe: {
      width: '100%',
    },
    '@font-face': [ProximaRegular, ProximaRegularLight, ProximaRegularBold],
  },
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
