import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import howtoExtractor from './extractors/howto';
import articleExtractor from './extractors/article';
import breadcrumbExtractor from './extractors/breadcrumb';
import imageGallery from './extractors/imageGallery';
import pageExtractor from './extractors/page';

const extractorsMap: any = {
  HowTo: howtoExtractor,
  Article: articleExtractor,
  BreadcrumbList: breadcrumbExtractor,
  ImageGallery: imageGallery,
  default: pageExtractor,
};

const PageScheme = ({
  type,
  name,
  description,
  slug,
  image,
  authorName,
  data,
}: PageSchemaInterface) => {
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
          youtubeurl
          twitterurl
          title
          pinteresturl
          facebookurl
          instaurl
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

  brandInfo.sameAs = [];
  brandInfo.youtubeurl && brandInfo.sameAs.push(brandInfo.youtubeurl);
  brandInfo.twitterurl && brandInfo.sameAs.push(brandInfo.twitterurl);
  brandInfo.pinteresturl && brandInfo.sameAs.push(brandInfo.pinteresturl);
  brandInfo.facebookurl && brandInfo.sameAs.push(brandInfo.facebookurl);
  brandInfo.instaurl && brandInfo.sameAs.push(brandInfo.instaurl);

  const extractor = extractorsMap[type] || extractorsMap.default;
  const jsonLd = Object.assign(
    {
      '@context': 'http://schema.org',
      '@type': type,
    },
    extractor(pageHref, data, brandInfo)
  );
  jsonLd.name = name || brandInfo.title;
  authorName && (jsonLd.author = { '@type': 'Person', name: authorName });

  jsonLd.description = description || brandInfo.descripton;

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
  authorName?: string;
  data?: any;
}
export default PageScheme;
