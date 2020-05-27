const extractor = (pageHref: string, data: any, brandInfo: any) => {
  const url = new URL(pageHref);
  const resp = {
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageHref,
    },
    inLanguage: brandInfo.langhref,
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

  if (data) {
    data.headline && (resp.headline = data.headline);
    data.author &&
      (resp.author = {
        '@type': 'Person',
        name: data.author ? data.author.name : brandInfo.title,
      });
  }
  return resp;
};

export default extractor;
