import { graphql } from 'gatsby';

export const query1 = graphql`
  fragment GalleryFieldsFull on SanityGalleryArticle {
    headline
    publishedAt(formatString: "MMMM D, YYYY")
    _updatedAt(formatString: "MMMM D, YYYY")
    subheading
    slug {
      current
    }
    id
    author {
      name
      slug {
        current
      }
      image {
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
    _type
    _rawBody(resolveReferences: { maxDepth: 10 })
    heroImage {
      alt
      asset {
        label
        title
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
    imageGallery {
      picture {
        alt
        asset {
          _id
          label
          title
          url
          fluid(maxWidth: 500, maxHeight: 500) {
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
    tags {
      name
      id
      tagCategory {
        name
        id
      }
    }
    seo {
      metaDescription
      metaKeywords
      metaTitle
    }
    readnext {
      ... on SanityGalleryArticle {
        headline
        slug {
          current
        }
        _type
        heroImage {
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
  fragment GalleryFieldsTile on SanityGalleryArticle {
    headline
    publishedAt(formatString: "MMMM D, YYYY")
    subheading
    slug {
      current
    }
    id
    heroImage {
      alt
      asset {
        label
        title
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
    _type
  }
`;
