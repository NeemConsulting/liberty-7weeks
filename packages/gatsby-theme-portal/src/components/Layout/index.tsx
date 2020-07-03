import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import theme from '../theme';
import Header from '../Header';
import Footer from '../Footer';
import PageSchema from '../PageSchema';

import useStyles from './styles';

const Layout = ({ className, children }: LayoutProps) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <a href="#main" className={classes.skipLink}>
          <span>Skip to content</span>
        </a>
        <Header />
        <PageSchema type={'WebSite'} />
        <main
          id="main"
          role="main"
          aria-label="Main Content"
          className={classNames(classes.mainContentWrapper, className)}
        >
          <Grid>{children}</Grid>
        </main>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout;

interface LayoutProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}
