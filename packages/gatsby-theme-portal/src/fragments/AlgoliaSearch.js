const postQuery = `{
  allSanityHowToArticle(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}},sort: { fields: [publishedAt], order: DESC } )
    {
    edges
    {
      node
      {
        path
        objectID:_id
        slug{current}
        pageType:_type
        slug: slug{current}
        Title:headline
        Subtitle:subheading
        image: heroImage{asset {
          url
        }
          alt
          imageTabID
        }
        duration: time
        difficulty:skillLevel
        products: productList{name
        brand{name}
        }
        tags: tags{tagCategory{name},name}
        author{name}
        publishedAt(formatString:"YYYY/MM/DD")
        _rawHowTobody
    }
  }
}
}`;
const galleryArticleQuery = `{
  allSanityGalleryArticle(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}},sort: { fields: [publishedAt], order: DESC } )
    {
    edges
    {
      node
      {
        path
        objectID:_id
        slug{current}
        pageType:_type
        Title:headline
        Subtitle:subheading
        image: heroImage{asset {
          url
        }
          alt
          imageTabID
        }
        tags: tags{tagCategory{name},name}
        author{name}
        publishedAt(formatString:"YYYY/MM/DD")
        _rawBody
    }
  }
}
}`;
const featureArticleQuery = `{
  allSanityFeatureArticle(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}},sort: { fields: [publishedAt], order: DESC } )
    {
    edges
    {
      node
      {
        path
        objectID:_id
        slug{current}
        pageType:_type
        Title:headline
        Subtitle:subheading
        image: heroImage{asset {
          url
        }
          alt
          imageTabID
        }
        tags: tags{tagCategory{name},name}
        author{name}
        publishedAt(formatString:"YYYY/MM/DD")
        seoKeys:seo{metaKeywords}
        _rawFeatureBody

    }
  }
}
}`;
const productQuery = `{
  allSanityProduct(filter: {slug: {current: {ne: null}}})
    {
    edges
    {
      node
      {
        path
        objectID:_id
        slug{current}
        pageType:_type
        Title:name
        Subtitle:tagLine
        image: image{asset {
          url
        }
          alt
          imageCaption
          imageTabID
        }
        brandName:brand{name}
        smartProductID
        buyNowLink:buyNow
        tags: tags{tagCategory{name},name}
        _rawUsageDetails
        _rawIngredients
    }
  }
}
}`;
const handleProductRawBody = node => {
  const { _rawUsageDetails, _rawIngredients, tags, ...rest } = node;
  const record = {
    ...rest,
    tag: tags.map(tag => tag.name),
    tagCategory: tags.map(tag => tag.tagCategory.name),
  };
  if (_rawUsageDetails) {
    record.usageBody = _rawUsageDetails
      .map(temp => temp.children && temp.children.map(temp1 => temp1.text))
      .toString();
  }
  if (_rawIngredients) {
    record.ingredientBody = _rawUsageDetails
      .map(temp => temp.children && temp.children.map(temp1 => temp1.text))
      .toString();
  }

  return record;
};

const handlehowToArticleRawBody = node => {
  const { _rawHowTobody, tags, ...rest } = node;
  const record = {
    ...rest,
    tag: tags.map(tag => tag.name),
    tagCategory: tags.map(tag => tag.tagCategory.name),
  };
  if (_rawHowTobody) {
    record.howTobody = _rawHowTobody
      .map(temp => temp.children && temp.children.map(temp1 => temp1.text))
      .toString();
  }

  return record;
};

const handleGalleryArticleRawBody = node => {
  const { _rawBody, tags, ...rest } = node;
  const record = {
    ...rest,
    tag: tags.map(tag => tag.name),
    tagCategory: tags.map(tag => tag.tagCategory.name),
  };
  if (_rawBody) {
    record.galleryBody = _rawBody
      .map(temp => temp.children && temp.children.map(temp1 => temp1.text))
      .toString();
  }

  return record;
};

const handleFeatureArticleRawBody = node => {
  const { _rawFeatureBody, tags, ...rest } = node;
  const record = {
    ...rest,
    tag: tags.map(tag => tag.name),
    tagCategory: tags.map(tag => tag.tagCategory.name),
  };
  if (_rawFeatureBody) {
    record.featureBody = _rawFeatureBody
      .map(temp => temp.children && temp.children.map(temp1 => temp1.text))
      .toString();
  }

  return record;
};

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) =>
      data.allSanityHowToArticle.edges.map(({ node }) =>
        handlehowToArticleRawBody(node)
      ),
    indexName: 'platformLiberty',
    matchFields: ['slug', 'modified'],
  },
  {
    query: galleryArticleQuery,
    transformer: ({ data }) =>
      data.allSanityGalleryArticle.edges.map(({ node }) =>
        handleGalleryArticleRawBody(node)
      ),
    indexName: 'platformLiberty',
    matchFields: ['slug', 'modified'],
  },
  {
    query: featureArticleQuery,
    transformer: ({ data }) =>
      data.allSanityFeatureArticle.edges.map(({ node }) =>
        handleFeatureArticleRawBody(node)
      ),
    indexName: 'platformLiberty',
    matchFields: ['slug', 'modified'],
  },
  {
    query: productQuery,
    transformer: ({ data }) =>
      data.allSanityProduct.edges.map(({ node }) => handleProductRawBody(node)),
    indexName: 'platformLiberty',
    matchFields: ['slug', 'modified'],
  },
];
module.exports = queries;
