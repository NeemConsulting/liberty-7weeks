import React, { useState, FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

import { ReactComponent as Search } from '../../images/icons/search.svg';
import Styles from './styles';
const useStyles = makeStyles(Styles);

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
