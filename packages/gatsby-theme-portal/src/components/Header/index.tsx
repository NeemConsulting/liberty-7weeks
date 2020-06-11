import React, { FunctionComponent } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Container from '@material-ui/core/Container';

import SiteNavigation from '../Navigation';
import SiteSearch from './search';
import NewsletterFollow from './newsletter-follow';
import useStyles from './styles';
import { ReactComponent as Logo } from '../../images/logo.svg';

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
    <header className={classes.header} role="banner" aria-label="header">
      <Container maxWidth="lg">
        <div className={classes.headerContentWrapper}>
          <div className={classes.logo}>
            <Link to="/">
              <Logo />
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
