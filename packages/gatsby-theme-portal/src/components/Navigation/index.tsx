import React, { FunctionComponent, useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import getSlug from '../../helpers/getSlug';

const useStyles = makeStyles(theme => ({
  NavigationToggleButton: {
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    '&.is-active': {
      '& div': {
        '& span': {
          '&:first-child': {
            top: '.6875rem',
            width: 0,
            left: '50%',
          },
          '&:nth-child(4)': {
            top: '.6875rem',
            width: 0,
            left: '50%',
          },
          '&:nth-child(3)': {
            transform: 'rotate(-45deg)',
            width: '120%',
            marginLeft: '-10%',
          },
          '&:nth-child(2)': {
            transform: 'rotate(45deg)',
            width: '120%',
            marginLeft: '-10%',
          },
        },
      },
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  NavigationToggleButtonIcon: {
    width: '1.5rem',
    height: '1.5rem',
    transition: '1s ease-in-out',
    cursor: 'pointer',
    position: 'relative',
  },
  NavigationToggleButtonIconBar: {
    transition: '.3s ease-in-out',
    display: 'block',
    position: 'absolute',
    height: '.0625rem',
    width: '100%',
    backgroundColor: theme.palette.common.white,
    opacity: 1,
    left: 0,
    top: '-.3125rem',
    '&:first-child': {
      top: '.0625rem',
    },
    '&:nth-child(2)': {
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '&:nth-child(3)': {
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '&:nth-child(4)': {
      top: '1.375rem',
    },
  },
  screenReaderOnly: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'polygon(0 0, 0 0, 0 0)',
    height: '.0625rem',
    margin: '-.0625rem',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '.0625rem',
    whiteSpace: 'nowrap',
  },
  navigation: {
    position: 'fixed',
    top: '60px',
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.common.black,
    zIndex: 1,
    height: 0,
    transition: 'height .3s ease-in-out',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      position: 'static',
      height: 'auto',
    },
  },
  activeNavigation: {
    height: 'auto',
  },
  navigationInnerWrapper: {
    overflow: 'auto',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: 'auto',
      display: 'block',
      overflow: 'visible',
    },
  },
  navigationList: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 0',
    listStyleType: 'none',
    margin: 0,

    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      flexDirection: 'row',
      borderTop: 'none',
      padding: 0,
    },
  },
  navigationListItem: {
    position: 'relative',
    '&:hover > a': {
      backgroundColor: '#FF3366',
    },
    '&:hover > div': {
      height: 'auto',
    },
  },
  navigationLink: {
    fontSize: '1rem',
    color: 'white',
    padding: '15px',
    textDecoration: 'none',
    width: '100%',
    textAlign: 'left',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textTransform: 'capitalize',
    '&:hover + div': {
      height: 'auto',
    },

    [theme.breakpoints.up('md')]: {
      padding: '0 20px',
      fontSize: '1.125rem',
      fontWeight: '700',
      width: 'auto',
      display: 'flex',
      alignItems: 'center',
      height: '59px',
      '&:hover': {
        backgroundColor: '#FF3366',
      },
      '&:focus': {
        backgroundColor: '#FF3366',
      },
      '&:focus > div': {
        height: 'auto',
      },
    },
  },
  dropdownMenuIcon: {
    [theme.breakpoints.up('md')]: {
      position: 'static',
      marginLeft: '10px',
    },
  },
  dropdownMenuIconSVG: {
    width: '.75rem',
    height: '.75rem',
    fill: 'white',
    display: 'block',
  },
  subNavigation: {
    overflow: 'hidden',
    transition: 'height .3s ease-in-out',
    height: 0,

    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '100%',
      left: 0,
      overflow: 'auto',
      height: 0,
      background: theme.palette.common.black,
      minWidth: '200px',
    },
  },
  subNavigationList: {
    listStyleType: 'none',
    padding: 0,
    [theme.breakpoints.up('md')]: {
      paddingTop: 10,
      paddingBottom: 10,
      borderTop: '4px solid #FF3366',
    },
  },
  subNavigationListItem: {},
  subNavigationLink: {
    padding: '15px',
    fontSize: '1rem',
    color: 'white',
    textDecoration: 'none',
    width: '100%',
    textAlign: 'left',
    position: 'relative',
    display: 'block',
    '&:hover': {
      backgroundColor: '#222',
    },
  },
}));

const SiteNavigation: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query siteNavigation {
      sanityNavBar(name: { eq: "Header" }) {
        navItems {
          navL1 {
            landingPage {
              name
            }
            name
            path
          }
          navL2 {
            landingPage {
              name
            }
            name
            path
          }
        }
      }
    }
  `);

  const [activeNav, setActiveNav] = useState(false);
  const handleNav = event => {
    event.currentTarget.classList.toggle('is-active');
    setActiveNav(!activeNav);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <button
        className={classes.NavigationToggleButton}
        type="button"
        onClick={handleNav}
      >
        <span className={classes.screenReaderOnly}>Toggle Navigation</span>
        <div aria-hidden="true" className={classes.NavigationToggleButtonIcon}>
          <span className={classes.NavigationToggleButtonIconBar}></span>
          <span className={classes.NavigationToggleButtonIconBar}></span>
          <span className={classes.NavigationToggleButtonIconBar}></span>
          <span className={classes.NavigationToggleButtonIconBar}></span>
        </div>
      </button>
      <nav
        className={classNames(
          classes.navigation,
          activeNav ? classes.activeNavigation : null
        )}
      >
        <h2 className={classes.screenReaderOnly}>Primary Navigation</h2>
        <div className={classes.navigationInnerWrapper} id="nav">
          <ul className={classes.navigationList}>
            {data.sanityNavBar.navItems.map(
              (
                navItem: {
                  navL1: NavItemInterface;
                  navL2: NavItemInterface;
                },
                index: number
              ) => (
                <li
                  className={classes.navigationListItem}
                  key={navItem.navL1.name}
                >
                  <a
                    href={
                      navItem.navL1.path
                        ? navItem.navL1.path
                        : `/${getSlug(navItem.navL1.landingPage.name)}`
                    }
                    className={classes.navigationLink}
                  >
                    {navItem.navL1.name}
                    {navItem.navL2.length ? (
                      <span
                        aria-hidden="true"
                        className={classes.dropdownMenuIcon}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          svg-inline=""
                          role="presentation"
                          focusable="false"
                          className={classes.dropdownMenuIconSVG}
                        >
                          <path d="M0 6a.5.5 0 01.853-.354l8.646 8.646 8.646-8.646a.5.5 0 01.707.707l-9 9a.5.5 0 01-.707 0l-9-9a.498.498 0 01-.146-.354z"></path>
                        </svg>
                      </span>
                    ) : null}
                  </a>
                  {navItem.navL2.length ? (
                    <div className={classes.subNavigation}>
                      <ul className={classes.subNavigationList}>
                        {navItem.navL2.map((navItem: any) => (
                          <li
                            className={classes.subNavigationListItem}
                            key={navItem.name}
                          >
                            <Link
                              tabIndex="0"
                              to={
                                navItem.path
                                  ? navItem.path
                                  : `/${getSlug(
                                      navItem.landingPage.name
                                    )}`
                              }
                              className={classes.subNavigationLink}
                            >
                              {navItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

interface NavItemInterface {
  name: string;
  path: string;
  landingPage?: {
    name: string;
  };
}
export default SiteNavigation;
