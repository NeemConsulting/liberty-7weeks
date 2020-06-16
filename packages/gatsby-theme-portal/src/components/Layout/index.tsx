import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import BackToTop from '../BackToTop';

import theme from '../theme';
import themeDark from '../theme-dark';

import Header from '../Header';
import Footer from '../Footer';
import PageSchema from '../PageSchema';

import useStyles from './styles';

const Layout = ({ className, children }: LayoutProps) => {
  const [dark, setDark] = useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={dark ? themeDark : theme}>
        <CssBaseline />
        <a href="#main" className={classes.skipLink}>
          <span className={classes.skipLinkText}>Skip to content</span>
        </a>
        <Header />
        <PageSchema type={'WebSite'} />
        <main
          id="main"
          role="main"
          aria-label="Main Content"
          className={classNames(classes.mainContentWrapper, className)}
        >
          <FormGroup className={classes.mode} row>
            <FormControlLabel
              control={
                <Switch
                  checked={dark}
                  onChange={() => setDark(!dark)}
                  name="mode"
                  inputProps={{ 'aria-label': 'Switch Dark Mode' }}
                />
              }
              label="Mode"
            />
          </FormGroup>
          <Grid>{children}</Grid>
        </main>
        <Footer />
        <BackToTop />
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
