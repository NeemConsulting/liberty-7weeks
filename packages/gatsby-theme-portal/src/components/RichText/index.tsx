import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';

const useStyles = makeStyles(theme => ({
  richText: {
    paddingTop: 40,
    marginBottom: 32,
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      background: '#fed760',
      height: 20,
      right: 0,
      top: 0,
      width: '100vw',
      zIndex: -1,
    },
    '& h2': {
      fontSize: '1.875rem',
      fontWeight: 700,
      margin: '50px 20px 20px 0',
      position: 'relative',
      background: theme.palette.common.white,
      padding: '16px 16px 0 16px',
      [theme.breakpoints.up('md')]: {
        fontSize: '2.25rem',
      },

      '&:before': {
        content: '""',
        position: 'absolute',
        background: theme.palette.common.black,
        right: -20,
        top: -20,
        width: '100vw',
        zIndex: -1,
        backgroundColor: '#fed760',
        height: 'calc(100% - .15em)',
      },
    },
    '& h3': {
      fontSize: '1.5rem',
      fontWeight: 400,
      margin: 0,
      marginBottom: 8,
      [theme.breakpoints.up('md')]: {
        fontSize: '1.875rem',
      },
    },
    '& p': {
      fontSize: '.875rem',
      margin: 0,
      marginBottom: 16,
      [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
    '& div': {
      margin: 0,
      marginBottom: 16,
    },
    '& a': {
      color: theme.palette.common.black,
      position: 'relative',
      textDecoration: 'none',
      display: 'inline-block',
      '&:before': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
        backgroundColor: '#FF3366',
        transition: 'all 0.3s ease-in-out',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: '100%',
        bottom: 0,
        height: 2,
        backgroundColor: theme.palette.common.black,
        transition: 'all 0.3s ease-in-out',
      },
      '&:hover:after': {
        right: 0,
      },
    },
    '& figure': {
      margin: 0,
      marginBottom: 16,
    },
    '& .c-product': {
      marginBottom: 30,
      marginTop: 30,
      textAlign: 'center',
    },
    '& .c-product__name': {
      fontSize: '.875rem',
      fontWeight: 700,
      backgroundImage: 'linear-gradient(120deg,#b8f0c0 0%,#b8f0c0 100%)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% .1875rem',
      backgroundPosition: '0 100%',
      display: 'inline-flex',
      paddingBottom: 3,
      [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
    '& .c-product__tagline': {
      marginBottom: 10,
      '& span': {
        fontSize: '1.125rem',
        fontWeight: 700,
        background:
          'linear-gradient(to bottom,#fff 40%,#f8e6de 5%,#f8e6de 95%)',
        display: 'inline-block',
      },
    },
    '& .c-product__image': {
      width: 250,
      margin: 'auto',
    },
    '& .c-product__link': {
      '&:before, &:after': {
        display: 'none',
      },
    },
  },
}));

const ArticleBodyBlockContent: FunctionComponent<ArticleBodyBlockContentProps> = ({
  data,
}) => {
  const classes = useStyles();

  return (
    <section className={classes.richText}>
      <BlockContent blocks={data} serializers={blockTypeDefaultSerializers} />
    </section>
  );
};

export default ArticleBodyBlockContent;

interface ArticleBodyBlockContentProps {
  data: any;
}
