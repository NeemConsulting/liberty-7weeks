import React, { useState, FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Search } from '../../images/icons/search.svg';
import { ReactComponent as Close } from '../../images/icons/close.svg';
import { getSearchQueryUrl } from '../../helpers/searchUrl';
import Styles from './styles';
const useStyles = makeStyles(Styles);

const SiteSearch: FunctionComponent = () => {
  const classes = useStyles();
  const [hideSiteSearchOverlay, sethideSiteSearchOverlay] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const showSiteSearchOverlay = () => {
    sethideSiteSearchOverlay(!hideSiteSearchOverlay);
  };

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
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
        <form
          className={classes.siteSearchForm}
          action={getSearchQueryUrl(searchQuery)}
          method="post"
        >
          <label htmlFor="siteSearch" className={classes.label}>
            Search
          </label>
          <input
            className={classes.siteSearchInput}
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={handleInputChange}
            name="siteSearch"
          />
          <button className={classes.siteSearchFormButton} type="submit">
            <Search />
            <span className={classes.srOnly}>Search</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default SiteSearch;
