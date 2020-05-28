import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Instagram } from '../../images/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../images/icons/twitter.svg';
import { ReactComponent as Pinterest } from '../../images/icons/pinterest.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const SocialMenu: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={`c-social ${classes.social}`}>
      <ul>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener norefferer"
          >
            <Instagram />
            <span className={classes.srOnly}>Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener norefferer"
          >
            <Twitter />
            <span className={classes.srOnly}>Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener norefferer"
          >
            <Pinterest />
            <span className={classes.srOnly}>Pinterest</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener norefferer"
          >
            <Youtube />
            <span className={classes.srOnly}>Youtube</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMenu;
