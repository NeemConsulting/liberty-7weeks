const extractor = (pageHref: string, data: any) => {
  const resp = {
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageHref,
    },
    headline: data.headline,
    datePublished: data.publishedAt,
    dateModified: data.publishedAt,
    author: {
      '@type': 'Person',
      name: data.author ? data.author.authorName : 'Unilever',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Unilever',
      logo: {
        '@type': 'ImageObject',
        url:
          'https://www.unilever.com/Images/UNILEVER_LOGO_160_tcm244-541804.gif',
      },
    },
  };

  return resp;
};

export default extractor;
