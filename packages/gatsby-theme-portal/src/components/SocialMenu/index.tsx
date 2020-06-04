import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Instagram } from '../../images/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../images/icons/twitter.svg';
import { ReactComponent as Pinterest } from '../../images/icons/pinterest.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';
import { ReactComponent as Facebook } from '../../images/icons/facebook.svg';
import { ReactComponent as Share } from '../../images/icons/facebook.svg';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const SocialMenu: FunctionComponent<SocialMenuInterface> = ({ links }) => {
  const classes = useStyles();
  const socialIcons: { [char: string]: any } = {
    facebook: Facebook,
    insta: Instagram,
    twitter: Twitter,
    pinterest: Pinterest,
    youtube: Youtube,
    default: Share,
  };

  const renderItems = () => {
    return Object.entries(links).map(([key, value]) => {
      const Component = socialIcons[key.split('url')[0]] || socialIcons.default;
      return (
        <li key={value}>
          <a href={value} target="_blank" rel="noopener noreferrer">
            <Component />
            <span className={classes.srOnly}>key</span>
          </a>
        </li>
      );
    });
  };

  if (!links) return null;

  return (
    <div className={`c-social ${classes.social}`}>
      <ul>{renderItems()}</ul>
    </div>
  );
};

interface SocialMenuInterface {
  links: any;
}

export default SocialMenu;
