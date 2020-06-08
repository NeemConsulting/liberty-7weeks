import React, { FunctionComponent, useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import classNames from 'classnames';

import useStyles from './styles';

const SiteNavigation: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query siteNavigation {
      sanityNavBar(name: { eq: "Header" }) {
        navItems {
          navL1 {
            landingPage {
              name
              path
              slug {
                current
              }
            }
            name
            path
          }
          navL2 {
            landingPage {
              name
              path
              slug {
                current
              }
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

  const getUrl = (navItem: NavItemInterface) => {
    let url;
    if (navItem.path) {
      url = navItem.path;
    } else if (navItem.landingPage) {
      url = navItem.landingPage.path;
    } else {
      url = '#';
    }

    return url;
  };

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
                  navL2: [NavItemInterface];
                },
                index: number
              ) => (
                <li
                  className={classes.navigationListItem}
                  key={navItem.navL1.name}
                >
                  <a
                    href={getUrl(navItem.navL1)}
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
                              to={getUrl(navItem)}
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
    path: string;
    slug: {
      current: string;
    };
  };
}
export default SiteNavigation;
