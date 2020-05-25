import { graphql } from 'gatsby';

export const query1 = graphql`
  fragment FeatureFieldsFull on SanityFeatureArticle {
    _type
    _rawFeatureBody(resolveReferences: { maxDepth: 10 })
    subheading
    slug {
      current
    }
    heroVideo {
      url
      youTubeCaption
    }
    heroImage {
      asset {
        url
        metadata {
          dimensions {
            height
            width
          }
        }
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }
    }
    headline
    seo {
      metaDescription
      metaKeywords
      metaTitle
    }
    author {
      authorName
      slug {
        current
      }
      authorImage {
        alt
        asset {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
    id
    publishedAt(formatString: "MMMM D, YYYY")
    _updatedAt(formatString: "MMMM D, YYYY")
    tags {
      tagName
      categoryName {
        tagCategoryName
      }
    }
    readnext {
      ... on SanityGalleryArticle {
        headline
        slug {
          current
        }
        _type
        heroImage {
          alt
          asset {
            fluid(maxWidth: 380, maxHeight: 380) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
      ... on SanityFeatureArticle {
        headline
        slug {
          current
        }
        _type
        heroImage {
          alt
          asset {
            fluid(maxWidth: 380, maxHeight: 380) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
      ... on SanityHowToArticle {
        headline
        slug {
          current
        }
        _type
        heroImage {
          alt
          asset {
            fluid(maxWidth: 380, maxHeight: 380) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  }
`;

export const query2 = graphql`
  fragment FeatureFieldsTile on SanityFeatureArticle {
    headline
    subheading
    slug {
      current
    }
    heroVideo {
      url
      youTubeCaption
    }
    _type
    id
    heroImage {
      asset {
        url
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }
    }
  }
`;
