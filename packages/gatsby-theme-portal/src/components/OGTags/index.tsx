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
  const title =
    data.seo && data.seo.metaTitle
      ? data.seo.metaTitle
      : data.headline || brandInfo.title;
  const description =
    data.seo && data.seo.metaDescription
      ? data.seo.metaDescription
      : data.headline || brandInfo.title;
  const metaTags = Object.assign(
    {
      'og:type': type,
      'og:url': pageHref,
      'og:title': title,
      'og:site_name': brandInfo.title,
      'twitter:site': brandInfo.title,
      'twitter:title': title,
      'twitter:description': description,
      'og:locale': brandInfo.langhref,
    },
    extractor(pageHref, data, brandInfo)
  );

  const metaArray: any = [];
  Object.keys(metaTags).forEach(key => {
    if (Array.isArray(metaTags[key])) {
      metaArray.push(
        ...metaTags[key].map((val: string) => ({
          property: key,
          content: val,
        }))
      );
    } else {
      metaArray.push({
        property: key,
        content: metaTags[key],
      });
    }
  });

  return <Helmet meta={metaArray} />;
};

interface OGTagsInterface {
  type: string;
  slug?: string;
  data?: any;
}
export default OGTags;
