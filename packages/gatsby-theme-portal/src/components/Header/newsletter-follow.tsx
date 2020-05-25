import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Follow } from '../../images/icons/follow.svg';
import SocialMenu from '../SocialMenu';

const useStyles = makeStyles(theme => ({
  pad20: {
    padding: 20,
  },
  follow: {
    position: 'absolute',
    right: 120,
    [theme.breakpoints.up('md')]: {
      right: 80,
    },
    '& svg': {
      fill: theme.palette.common.white,
    },
  },
  followButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '&:hover': {
      backgroundColor: '#FF3366',
    },
    '&:hover > div': {
      height: 'auto',
    },
  },
  followPopup: {
    position: 'fixed',
    top: 60,
    right: 0,
    backgroundColor: theme.palette.common.white,
    width: '100vw',
    boxShadow: '0 0 10px 4px rgba(0,0,0,.1)',
    height: 0,
    transition: 'height 0.3s ease-in-out',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      minWidth: 340,
      right: -20,
      width: 340,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      left: 0,
      top: 0,
      height: 4,
      backgroundColor: '#FF3366',
    },
    '& .c-social': {
      '& ul': {
        justifyContent: 'center',
      },
      '& svg': {
        fill: theme.palette.common.black,
      },
    },
  },
  newsletter: {
    marginTop: 20,
    '& a': {
      fontSize: '1.125rem',
      fontWeight: 700,
      height: 49,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF3366',
      color: theme.palette.common.white,
      width: '100%',
      cursor: 'pointer',
      transition: 'transform 0.3s ease-in-out',
      position: 'relative',
      textDecoration: 'none',
      transform: 'translateZ(0)',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        top: 0,
        backgroundColor: '#FF3366',
        zIndex: -1,
        height: 49,
        transform: 'scaleY(0)',
        transition:
          'transform .3s cubic-bezier(.215,.61,.355,1),-webkit-transform .3s cubic-bezier(.215,.61,.355,1)',
      },
      '&:hover::before': {
        backgroundColor: theme.palette.common.black,
        transform: 'scaleY(1)',
      },
    },
  },
}));

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
