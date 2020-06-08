import React from 'react';
import { graphql } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SEO from '../components/Seo';
import Layout from '../components/Layout';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(8),
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '@keyframes animate': {
      '0%': {
        backgroundPosition: 'left 0px top 30%',
      },
      '40%': {
        backgroundPosition: 'left 800px top 30%',
      },
    },
    title: {
      fontSize: '20rem',
      lineHeight: 1,
      fontWeight: 600,
      margin: 0,
      marginBottom: theme.spacing(2),
      backgroundImage: 'url(/textclip.jpg)',
      '-webkitBackgroundClip': () => `${'text'}`,
      textFillColor: 'transparent',
      animation: `$animate 15s linear infinite`,
    },
    subTitle: {
      fontSize: '2rem',
      lineHeight: 1,
      fontWeight: 600,
      margin: 0,
      marginBottom: theme.spacing(2),
    },
  })
);

export const query = graphql`
  query NotFoundPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const NotFound = ({ data: { site } }: NotFoundProps) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO
        lang={'tl-ph'}
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <div className={classes.wrapper}>
          <p className={classes.title}>404</p>
          <p className={classes.subTitle}>That’s an error!</p>
          <p>
            404 Unfortunately, there is no such page on the site. Let us know
            what you are looking for and we will answer.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFound;

interface NotFoundProps {
  data: {
    site: any;
  };
}
