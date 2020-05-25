import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import howtoExtractor from './extractors/howto';
import articleExtractor from './extractors/article';
import breadcrumbExtractor from './extractors/breadcrumb';
import pageExtractor from './extractors/page';

const extractorsMap: any = {
  HowTo: howtoExtractor,
  Article: articleExtractor,
  BreadcrumbList: breadcrumbExtractor,
  default: pageExtractor,
};

const PageScheme = ({
  type,
  name,
  description,
  slug,
  image,
  data,
}: PageSchemaInterface) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteName
            siteUrl
          }
        }
      }
    `
  );
  let pageHref = `${site.siteMetadata.siteUrl}/`;
  slug && (pageHref += `${slug}/`);

  const extractor = extractorsMap[type] || extractorsMap.default;
  const jsonLd = Object.assign(
    {
      '@context': 'http://schema.org',
      '@type': type,
      author: { '@type': 'Organization', name: 'The Team' },
    },
    extractor(pageHref, data)
  );
  jsonLd.name = name || site.siteMetadata.siteName;

  description && (jsonLd.description = description);

  image &&
    (jsonLd.image = {
      '@type': 'ImageObject',
      url: image.url,
      height: image.height,
      width: image.width,
    });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface PageSchemaInterface {
  type: string;
  name?: string;
  description?: string;
  slug?: string;
  image?: {
    url: string;
    height: string;
    width: string;
  };
  data?: any;
}
export default PageScheme;
