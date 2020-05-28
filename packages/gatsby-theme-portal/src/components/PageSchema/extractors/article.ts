const extractor = (pageHref: string, data: any, brandInfo: any) => {
  const url = new URL(pageHref);

  const resp = {
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageHref,
    },
    headline: data.headline,
    datePublished: data.publishedAt || data._createdAt,
    dateModified: data.publishedAt || data._updatedAt,
    author: {
      '@type': 'Person',
      name: data.author ? data.author.name : 'Unilever',
    },
    publisher: {
      '@type': 'Organization',
      name: brandInfo.title,
      url: brandInfo.domainurl,
      sameAs: brandInfo.sameAs,
      logo: {
        '@type': 'ImageObject',
        url: `${url.origin}/unilever-logo.png`,
      },
    },
  };

  return resp;
};

export default extractor;
