import React, { FunctionComponent } from 'react';
import { SanityNewsletterBlockInterface } from './models';

import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';

import useStyles from './styles';

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
