import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import UnileverLogo from '../../images/unilever-logo.png';
import SocialMenu from '../SocialMenu';
import useStyles from './styles';
import BackToTop from '../BackToTop';
import { ReactComponent as NewWindow } from '../../images/icons/launch.svg';

const Footer: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query footerNavigation {
      sanityNavBar(name: { eq: "Footer" }) {
        navItems {
          navL1 {
            name
            path
            externalLink
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
    <footer className={classes.footer} role="contentinfo" aria-label="footer">
      <SocialMenu links={data.brandInfo} />
      <nav
        className={classes.wrapper}
        role="navigation"
        aria-label="Footer Navigation"
      >
        <ul className={classes.navigationItems}>
          {data.sanityNavBar.navItems.map(
            (navItem: {
              navL1: { name: string; path: string; externalLink: string };
            }) => (
              <li className={classes.navigationItem} key={navItem.navL1.name}>
                <a
                  href={
                    navItem.navL1.externalLink ||
                    navItem.navL1.path ||
                    `/${navItem.navL1.name}`
                  }
                  className={classes.navigationLink}
                >
                  {navItem.navL1.name}
                  {navItem.navL1.externalLink && <NewWindow />}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
      <div className={classes.footerSecondary}>
        <img src={UnileverLogo} role="presentation" width="36" />
        <p>Copyright &copy; {new Date().getFullYear()} Unilever.</p>
      </div>
      <BackToTop />
    </footer>
  );
};

export default Footer;
