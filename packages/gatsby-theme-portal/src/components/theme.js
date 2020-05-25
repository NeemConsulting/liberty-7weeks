import { createMuiTheme } from '@material-ui/core';

const primary = '#ff3366';
const secondary = '#2c5270';
const black = '#000';
const white = '#fff';

const theme = createMuiTheme({
  overrides: {
    palette: {
      primary: { main: primary },
      secondary: { main: secondary },
      common: {
        black,
        white,
      },
    },
  },
});

export default theme;
