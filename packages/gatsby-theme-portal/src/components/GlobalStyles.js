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
