import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import articleExtractor from './extractors/article';
import pageExtractor from './extractors/page';
import { Helmet } from 'react-helmet';

const extractorsMap: any = {
  article: articleExtractor,
  default: pageExtractor,
};

const OGTags = ({ type, data, slug }: OGTagsInterface) => {
  const { site, sanityBrandInfo: brandInfo } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteName
            siteUrl
          }
        }
        sanityBrandInfo {
          title
          domainurl
          brandLogoURL
          brandImageURL
          description
          langhref
        }
      }
    `
  );
  let pageHref = `${site.siteMetadata.siteUrl}/`;
  slug && (pageHref += `${slug}/`);

  const extractor = extractorsMap[type] || extractorsMap.default;

  const metaTags = Object.assign(
    {
      'og:type': type,
      'og:url': pageHref,
      'og:title': data.headline || brandInfo.title,
      'og:site_name': brandInfo.title,
      'og:locale': brandInfo.langhref,
    },
    extractor(pageHref, data, brandInfo)
  );

  return (
    <Helmet
      meta={Object.keys(metaTags).map(key => ({
        property: key,
        content: metaTags[key],
      }))}
    />
  );
};

interface OGTagsInterface {
  type: string;
  slug?: string;
  data?: any;
}
export default OGTags;
