import React, { FunctionComponent } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import LogoImage from '../../images/logo.svg';
import SiteNavigation from '../Navigation';
import SiteSearch from './search';
import NewsletterFollow from './newsletter-follow';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const Header: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query brandSocialLinks {
      brandInfo: sanityBrandInfo {
        pinteresturl
        twitterurl
        youtubeurl
        facebookurl
        instaurl
      }
    }
  `);
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container maxWidth="lg">
        <div className={classes.headerContentWrapper}>
          <div className={classes.logo}>
            <Link to="/">
              <img src={LogoImage} width="139" alt="Simple Article" />
            </Link>
          </div>
          <SiteNavigation />
          <NewsletterFollow
            label={'Subscribe to our newsletter'}
            links={data.brandInfo}
          />
          <SiteSearch />
        </div>
      </Container>
    </header>
  );
};

export default Header;
