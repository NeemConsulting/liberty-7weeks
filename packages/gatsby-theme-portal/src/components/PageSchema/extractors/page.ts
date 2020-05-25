const extractor = (pageHref: string, data: any) => {
  const url = new URL(pageHref);
  const resp = {
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageHref,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Unilever',
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
        name: data.author ? data.author.authorName : 'Unilever',
      });
  }
  return resp;
};

export default extractor;
