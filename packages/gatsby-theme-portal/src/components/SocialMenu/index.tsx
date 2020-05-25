import React, { FunctionComponent, Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Instagram } from '../../images/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../images/icons/twitter.svg';
import { ReactComponent as Pinterest } from '../../images/icons/pinterest.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';

const useStyles = makeStyles(theme => ({
  social: {
    [theme.breakpoints.up('md')]: {
      alignSelf: 'center',
    },

    '& ul': {
      listStyleType: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
    },

    '& li': {
      marginRight: 20,
      '&:last-child': {
        marginRight: 0,
      },
    },

    '& a:hover svg': {
      fill: '#FF3366',
    },

    '& svg': {
      width: 32,
      height: 32,
      fill: theme.palette.common.white,
      transition: 'all .3s',
    },
  },
  srOnly: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'polygon(0 0,0 0,0 0)',
    height: '.0625rem',
    margin: '-.0625rem',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '.0625rem',
    whiteSpace: 'nowrap',
  },
}));

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
