import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';
import { SanityNewsletterBlockInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
const useStyles = makeStyles(theme => ({
  newsletter: {
    position: 'relative',
    paddingBottom: 32,
    paddingTop: 32,
    textAlign: 'center',
  },
  newsletterContent: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 760,
    margin: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
  },
  newsletterTitle: {
    fontSize: '1.125rem',
    lineHeight: 1.3,
    margin: 0,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.875rem',
      marginBottom: 30,
    },
    '& p': {
      margin: 0,
    },
  },
  form: {
    marginTop: 20,
    width: '90%',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '70%',
      marginTop: 10,
    },
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  formLabel: {
    display: 'none',
  },
  formControl: {
    border: '1px solid #ccc',
    width: '100%',
    flex: 1,
    padding: '10px 16px',
    height: 50,
    fontSize: '1rem',
  },
  formButton: {
    fontSize: '1.125rem',
    fontWeight: 700,
    width: 160,
    height: 50,
    marginLeft: -1,
    cursor: 'pointer',
    backgroundColor: '#FF3366',
    border: '1px solid #FF3366',
    color: theme.palette.common.white,
    position: 'relative',
    transform: 'perspective(1px) translateZ(0)',
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.common.black,
      transform: 'scaleX(0)',
      transformOrigin: '0 50%',
      transitionProperty: 'transform',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-out',
    },
    '&:hover': {
      borderColor: theme.palette.common.black,
      '&:before': {
        transform: 'scaleX(1)',
      },
    },
  },
}));

const SanityNewsletterBlock: FunctionComponent<SanityNewsletterBlockInterface> = ({
  _rawBody,
}) => {
  const classes = useStyles();

  return (
    <section className={classes.newsletter}>
      <div className={classes.newsletterContent}>
        {_rawBody && (
          <h3 className={classes.newsletterTitle}>
            <BlockContent
              serializers={blockTypeDefaultSerializers}
              blocks={_rawBody}
            />
          </h3>
        )}
        <form action="/newsletter" method="POST" className={classes.form}>
          <div className={classes.formGroup}>
            <label className={classes.formLabel} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className={classes.formControl}
              aria-label="Email"
              name="email"
              placeholder="Your E-mail Address"
              required={true}
            />
            <button type="submit" className={classes.formButton} role="button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SanityNewsletterBlock;
