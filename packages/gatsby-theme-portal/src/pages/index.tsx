import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/Seo';
import Layout from '../components/Layout';

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    layout: allSanityLandingPage(filter: { name: { eq: "Home Page" } }) {
      nodes {
        name
        landingSections {
          ... on SanityArticleSlider {
            id
            name
          }
        }
      }
    }
    howtoArticles: allSanityHowToArticle {
      nodes {
        headline
        publishedAt(formatString: "MMMM D, YYYY")
        skillLevel
        subheading
        time
        slug {
          current
        }
      }
    }
    galleryArticles: allSanityGalleryArticle {
      nodes {
        headline
        publishedAt(formatString: "MMMM D, YYYY")
        subheading
        slug {
          current
        }
      }
    }
  }
`;

const IndexPage = ({
  data: {
    layout: { nodes: layoutNodes },
    howtoArticles: { nodes: howtoArticles },
    galleryArticles: { nodes: galleryArticles },
    site,
  },
}: IndexPageProps) => {
  const page = layoutNodes[0];

  return (
    <Layout>
      <SEO
        lang={'tl-ph'}
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <section>
        <h3>How To Articles</h3>
        {howtoArticles
          .filter(article => article.slug !== null)
          .map(article => (
            <div key={article.headline}>
              <Link to={article.slug.current}>{article.headline}</Link>
            </div>
          ))}
      </section>
      <section>
        <h3>Gallery Articles</h3>
        {galleryArticles
          .filter(article => article.slug !== null)
          .map(article => (
            <div key={article.headline}>
              <Link to={article.slug.current}>{article.headline}</Link>
            </div>
          ))}
      </section>
    </Layout>
  );
};

export default IndexPage;

interface IndexPageProps {
  data: {
    layout: {
      nodes: any;
    };
    howtoArticles: {
      nodes: any;
    };
    galleryArticles: {
      nodes: any;
    };
    site: any;
  };
}
