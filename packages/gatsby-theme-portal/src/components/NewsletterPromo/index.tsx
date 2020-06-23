import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { NewsletterPromoInterface } from './models';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import useStyles from './styles';

const NewsletterPromo: FunctionComponent<NewsletterPromoInterface> = ({
  _rawBody,
  ctaLabel,
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
        <Link to="/subscribe/" className={classes.subscribe}>
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
};

export default NewsletterPromo;
