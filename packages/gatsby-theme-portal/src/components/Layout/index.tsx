import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';

import GlobalStyles from '../GlobalStyles';
import Header from '../Header';
import Footer from '../Footer';
import PageSchema from '../PageSchema';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(10),
  },
  mainContentWrapper: {
    marginTop: theme.spacing(7.5),
    '&.home-page': {
      paddingTop: 0,
    },
  },
}));

const Layout = ({ className, children }: LayoutProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalStyles />
      <Header />
      <PageSchema type={'WebSite'} />
      <main className={classNames(classes.mainContentWrapper, className)}>
        <Grid>{children}</Grid>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

interface LayoutProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}
