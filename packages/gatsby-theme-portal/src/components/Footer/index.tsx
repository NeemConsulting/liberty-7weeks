import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

import UnileverLogo from '../../images/unilever-logo.png';
import SocialMenu from '../SocialMenu';

const useStyles = makeStyles(theme => ({
  footer: {
    background: theme.palette.common.black,
    color: 'rgba(255, 255, 255, 0.4)',
    transition: 'color 0.25s ease-out 0s',
    fontSize: '.775rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 48,
    '& .c-social': {
      marginLeft: 20,
      marginRight: 20,
    },
  },
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  navigationItems: {
    listStyleType: 'none',
    columns: 2,
    paddingLeft: 0,
    paddingBottom: 16,
    marginTop: 30,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItem: 'center',
      paddingBottom: 48,
    },
  },
  navigationItem: {
    marginBottom: 10,
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
      marginLeft: 20,
      marginRight: 20,
    },
  },
  navigationLink: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '.875rem',
    fontWeight: 700,
    lineHeight: 1.6,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.6,
    },
    '&:after': {
      content: '""',
      display: 'block',
      height: '.1875rem',
      transition: '.35s cubic-bezier(.215,.61,.355,1)',
      width: 0,
    },
    '&:hover:after': {
      width: '100%',
      backgroundColor: '#FF3366',
    },
  },
  footerSecondary: {
    textAlign: 'center',
    backgroundColor: '#222',
    color: '#999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    paddingBottom: 24,
    [theme.breakpoints.up('md')]: {
      paddingTop: 32,
      paddingBottom: 40,
    },
    '& img': {
      marginRight: 10,
      opacity: 0.5,
    },
  },
}));

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
    }
  `);

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <SocialMenu />
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
