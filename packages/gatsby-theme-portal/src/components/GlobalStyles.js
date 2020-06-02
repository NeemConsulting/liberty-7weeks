import { withStyles } from '@material-ui/core';

const ProximaRegular = {
  fontFamily: 'Proxima Nova Alt',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    url('/fonts/ProximaNovaAltRegular.woff2') format('woff2'), url('/fonts/ProximaNovaAltRegular.woff2') format('woff')
  `,
};

const ProximaRegularLight = {
  fontFamily: 'Proxima Nova Alt',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `
    url('/fonts/ProximaNovaAltLight.woff2') format('woff2'), url('/fonts/ProximaNovaAltRegular.woff') format('woff')
  `,
};

const ProximaRegularBold = {
  fontFamily: 'Proxima Nova Alt',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `
    url('/fonts/ProximaNovaAltBold.woff2') format('woff2'), url('/fonts/ProximaNovaAltBold.woff') format('woff')
  `,
};

const styles = () => ({
  '@global': {
    '@font-face': [ProximaRegular, ProximaRegularLight, ProximaRegularBold],
    '*': {
      boxSizing: 'border-box',
      fontSmoothing: 'antialiased',
    },
    h3: {
      lineHeight: 1.1,
    },
    iframe: {
      width: '100%',
    },
    '.img-responsive': {
      maxWidth: '100%',
      width: '100%',
      display: 'block',
    },
  },
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
