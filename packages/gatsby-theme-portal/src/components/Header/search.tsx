import React, { useState, FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Search } from '../../images/icons/search.svg';
import { ReactComponent as Close } from '../../images/icons/close.svg';

import Styles from './styles';
const useStyles = makeStyles(Styles);

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
