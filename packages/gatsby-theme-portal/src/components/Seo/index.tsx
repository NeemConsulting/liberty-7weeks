import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
      description
      keywords
      author {
        name
      }
    }
  }
`;

function Index({ description, lang, keywords, title }: SeoProps) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || (data.site && data.site.description) || '';
        const siteTitle = (data.site && data.site.title) || '';
        const siteAuthor =
          (data.site && data.site.author && data.site.author.name) || '';

        return (
          <Helmet
            bodyAttributes={{ id: 'top' }}
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: siteAuthor,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ].concat(
              keywords && keywords.length > 0
                ? {
                    name: 'keywords',
                    content: keywords.join(', '),
                  }
                : []
            )}
          />
        );
      }}
    />
  );
}

export default Index;

interface SeoProps {
  description: string;
  lang: string;
  keywords: string[];
  title: string;
}
