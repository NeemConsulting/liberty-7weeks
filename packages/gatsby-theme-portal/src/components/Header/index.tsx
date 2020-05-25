import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import LogoImage from '../../images/logo.svg';
import SiteNavigation from '../Navigation';

import SiteSearch from './search';
import NewsletterFollow from './newsletter-follow';

const useStyles = makeStyles(theme => ({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3,
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #FF3366',
    backgroundColor: 'black',
  },
  headerContentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  logo: {
    [theme.breakpoints.up('md')]: {
      margin: '0 30px -2px 0',
    },
  },
}));

const Header: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container maxWidth="lg">
        <div className={classes.headerContentWrapper}>
          <h1 className={classes.logo}>
            <Link to="/home-page">
              <img src={LogoImage} width="139" alt="Simple Article" />
            </Link>
          </h1>
          <SiteNavigation />
          <NewsletterFollow />
          <SiteSearch />
        </div>
      </Container>
    </header>
  );
};

export default Header;
