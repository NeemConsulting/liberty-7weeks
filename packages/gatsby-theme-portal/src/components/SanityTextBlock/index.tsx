import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';
import { SanityTextBlockInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import quote from '../../images/icons/quote-left.svg';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const SanityNewsletterBlock: FunctionComponent<SanityTextBlockInterface> = ({
  name,
  _rawTextBlockBody,
}) => {
  const classes = useStyles({ icon: quote });

  return (
    <section className={classes.section}>
      <Container>
        <div className={classes.sectionDescription}>
          <BlockContent
            serializers={blockTypeDefaultSerializers}
            blocks={_rawTextBlockBody}
          />
        </div>
      </Container>
    </section>
  );
};

export default SanityNewsletterBlock;
