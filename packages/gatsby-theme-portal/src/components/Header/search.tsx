import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { ReactComponent as Search } from '../../images/icons/search.svg';
import useStyles from './styles';

const SiteSearch: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.siteSearch}>
      <Link to="/search-results" className={classes.searchButton}>
        <Search />
        <span className={classes.srOnly}>Search</span>
      </Link>
    </div>
  );
};

export default SiteSearch;
