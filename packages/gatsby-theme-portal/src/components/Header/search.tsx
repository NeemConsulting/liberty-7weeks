import React, { useState, FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Search } from '../../images/icons/search.svg';
import { ReactComponent as Close } from '../../images/icons/close.svg';

const useStyles = makeStyles(theme => ({
  siteSearch: {
    position: 'absolute',
    right: 60,
    [theme.breakpoints.up('md')]: {
      right: 20,
    },
    '& svg': {
      fill: theme.palette.common.white,
    },
  },
  searchButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: '#FF3366',
    },
  },
  siteSearchOverlay: {
    position: 'fixed',
    top: 60,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.common.white,
    overflow: 'auto',
    zIndex: 3,
  },
  siteSearchForm: {
    maxWidth: '780px',
    // width: '100%',
    display: 'flex',
    margin: '50px 20px',
    [theme.breakpoints.up('md')]: {
      margin: '50px auto',
    },
  },
  siteSearchInput: {
    padding: '10px 20px',
    border: '1px solid #999',
    fontSize: '1.125rem',
    fontWeight: 600,
    width: '100%',
    flex: 1,
  },
  siteSearchFormButton: {
    backgroundColor: 'transparent',
    border: '1px solid #999',
    cursor: 'pointer',
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -1,
    '&:hover': {
      backgroundColor: '#FF3366',
      borderColor: '#FF3366',
    },
  },
}));

const SiteSearch: FunctionComponent = () => {
  const classes = useStyles();
  const [hideSiteSearchOverlay, sethideSiteSearchOverlay] = useState(true);

  const showSiteSearchOverlay = () => {
    sethideSiteSearchOverlay(!hideSiteSearchOverlay);
  };

  return (
    <>
      <div className={classes.siteSearch}>
        <button
          className={classes.searchButton}
          type="button"
          onClick={showSiteSearchOverlay}
        >
          {hideSiteSearchOverlay ? <Search /> : <Close />}
        </button>
      </div>
      <div className={classes.siteSearchOverlay} hidden={hideSiteSearchOverlay}>
        <form className={classes.siteSearchForm} action="" method="POST">
          <input
            className={classes.siteSearchInput}
            type="text"
            placeholder="What are you looking for?"
          />
          <button className={classes.siteSearchFormButton} type="submit">
            <Search />
          </button>
        </form>
      </div>
    </>
  );
};

export default SiteSearch;
