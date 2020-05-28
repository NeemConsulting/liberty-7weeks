import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Follow } from '../../images/icons/follow.svg';
import SocialMenu from '../SocialMenu';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const NewsletterFollow: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.follow}>
      <button className={classes.followButton} type="button">
        <Follow />

        <div className={classes.followPopup}>
          <div className={classes.pad20}>
            <SocialMenu />
            <div className={classes.newsletter}>
              <a href="/">Subscribe to our newsletter</a>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default NewsletterFollow;
