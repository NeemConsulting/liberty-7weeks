const {
  handleGalleryArticleRawBody,
  handlehowToArticleRawBody,
  handleProductRawBody,
  handleFeatureArticleRawBody,
} = require('./searchQuery');
const howToArticleQuery = `{
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
        title:headline
        subtitle:subheading
        image: heroImage{asset {
        url
        fluid(maxWidth: 140, maxHeight: 140) {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }    
          alt
          imageCaption
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
        title:headline
        subtitle:subheading
        image: heroImage{asset {
        url
        fluid(maxWidth: 140, maxHeight: 140) {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }    
          alt
          imageCaption
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
        title:headline
        subtitle:subheading
        image: heroImage{asset {
        url
        fluid(maxWidth: 140, maxHeight: 140) {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }    
          alt
          imageCaption
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
        objectID:_id
        slug{current}
        pageType:_type
        title:name
        subtitle:tagLine
        image: image{
      asset {
        url
        fluid(maxWidth: 140, maxHeight: 140) {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
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
const settings = {
  attributesForFaceting: [
    `pageType`,
    `tags.name`,
    `tags.tagCategory.name`,
    `difficulty`,
    `duration`,
  ],
  ranking: ['desc(publishedAt)'],
  hitsPerPage: 10,
  attributesToSnippet: [
    `featureBody:30`,
    `galleryBody:30`,
    `howTobody:30`,
    `usageBody:30`,
    `ingredientBody:30`,
  ],
};

const queries = [
  {
    query: howToArticleQuery,
    transformer: ({ data }) =>
      data.allSanityHowToArticle.edges.map(({ node }) =>
        handlehowToArticleRawBody(node)
      ),
    indexName: 'howtoArticle',
    settings,
    matchFields: ['slug', 'modified'],
  },
  {
    query: galleryArticleQuery,
    transformer: ({ data }) =>
      data.allSanityGalleryArticle.edges.map(({ node }) =>
        handleGalleryArticleRawBody(node)
      ),
    indexName: 'howtoArticle',
    settings,
    matchFields: ['slug', 'modified'],
  },
  {
    query: featureArticleQuery,
    transformer: ({ data }) =>
      data.allSanityFeatureArticle.edges.map(({ node }) =>
        handleFeatureArticleRawBody(node)
      ),
    indexName: 'howtoArticle',
    settings,
    matchFields: ['slug', 'modified'],
  },
  {
    query: productQuery,
    transformer: ({ data }) =>
      data.allSanityProduct.edges.map(({ node }) => handleProductRawBody(node)),
    indexName: 'howtoArticle',
    settings,
    matchFields: ['slug', 'modified'],
  },
];
module.exports = queries;
