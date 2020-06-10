import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import UnileverLogo from '../../images/unilever-logo.png';
import SocialMenu from '../SocialMenu';
import useStyles from './styles';

const Footer: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query footerNavigation {
      sanityNavBar(name: { eq: "Footer" }) {
        navItems {
          navL1 {
            name
            path
          }
        }
      }
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
    <footer className={classes.footer}>
      <SocialMenu links={data.brandInfo} />
      <nav className={classes.wrapper} role="navigation">
        <ul className={classes.navigationItems}>
          {data.sanityNavBar.navItems.map(
            (navItem: { navL1: { name: string; path: string } }) => (
              <li className={classes.navigationItem} key={navItem.navL1.name}>
                <a
                  href={navItem.navL1.path || `/${navItem.navL1.name}`}
                  className={classes.navigationLink}
                >
                  {navItem.navL1.name}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
      <div className={classes.footerSecondary}>
        <img
          src={UnileverLogo}
          role="presentation"
          alt="Unilever Logo"
          width="36"
        />
        <p>Copyright &copy; {new Date().getFullYear()} Unilever.</p>
      </div>
    </footer>
  );
};

export default Footer;
