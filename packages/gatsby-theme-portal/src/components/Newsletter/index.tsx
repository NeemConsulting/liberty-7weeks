import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  newsletter: {
    marginTop: 30,
    position: 'relative',
    padding: '20px 20px 0 0',
    textAlign: 'center',
    '&:before': {
      content: '""',
      background: '#2c5270',
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100vw',
      height: 133,
      zIndex: 0,
    },
  },
  newsletterContent: {
    padding: 20,
    backgroundColor: theme.palette.common.white,
    position: 'relative',
    zIndex: 1,
  },
  newsletterTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    margin: 0,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.875rem',
    },
    '& p': {
      margin: 0,
    },
  },
  form: {
    marginTop: 10,
    width: '100%',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '70%',
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
    height: 40,
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      height: 50,
    },
  },
  formButton: {
    width: 160,
    height: 40,
    marginLeft: -1,
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 500,
    backgroundColor: '#FF3366',
    borderColor: '#FF3366',
    color: theme.palette.common.white,
    [theme.breakpoints.up('md')]: {
      height: 50,
    },
  },
}));

const Newsletter: FunctionComponent<NewsletterInterface> = ({ data }) => {
  const classes = useStyles();
  return (
    <section className={classes.newsletter}>
      <div className={classes.newsletterContent}>
        <h3 className={classes.newsletterTitle}>
          Subscribe to our newsletter and get exclusive hair care tips and
          tricks from the experts.
        </h3>
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

interface NewsletterInterface {
  data: any;
}
export default Newsletter;
