import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core/';

import GlobalStyles from '../GlobalStyles';
import theme from '../theme';
import themeDark from '../theme-dark';

import Header from '../Header';
import Footer from '../Footer';
import PageSchema from '../PageSchema';
import BackToTop from '../BackToTop';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const Layout = ({ className, children }: LayoutProps) => {
  const [dark, setDark] = useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={dark ? themeDark : theme}>
        <CssBaseline />
        <GlobalStyles />
        <a href="#main" className={classes.skipLink}>
          <span className={classes.skipLinkText}>Skip to content</span>
        </a>
        <Header />
        <PageSchema type={'WebSite'} />
        <main
          id="main"
          className={classNames(classes.mainContentWrapper, className)}
        >
          <Grid>{children}</Grid>
        </main>
        <BackToTop />
        <Footer />
        <FormGroup className={classes.mode} row>
          <FormControlLabel
            color="primary"
            control={
              <Switch
                checked={dark}
                onChange={() => setDark(!dark)}
                name="mode"
              />
            }
          />
        </FormGroup>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout;

interface LayoutProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}
