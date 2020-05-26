import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';
import { SanityTextBlockInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
const useStyles = makeStyles(theme => ({
  section: {
    paddingBottom: 16,
    paddingTop: 16,
    backgroundColor: '#f8e6de',
    [theme.breakpoints.up('md')]: {
      paddingBottom: 24,
      paddingTop: 24,
    },
  },
  sectionDescription: {
    '& p': {
      fontSize: '.875rem',
      margin: 0,
      [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
    '& h2': {
      fontSize: '1.5rem',
    },
  },
}));

const SanityNewsletterBlock: FunctionComponent<SanityTextBlockInterface> = ({
  name,
  _rawTextBlockBody,
}) => {
  const classes = useStyles();

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
