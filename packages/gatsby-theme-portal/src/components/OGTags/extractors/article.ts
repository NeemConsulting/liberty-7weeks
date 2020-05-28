const extractor = (pageHref: string, data: any, brandInfo: any) => {
  const resp = {
    'article:published_time': data.publishedAt || data._createdAt,
    'article:modified_time': data.publishedAt || data._updatedAt,
    'article:author': data.author ? data.author.name : 'Unilever',
    'og:description': data.subheading,
  };

  data.heroImage && (resp['og:image'] = data.heroImage.asset.url);

  return resp;
};

export default extractor;
