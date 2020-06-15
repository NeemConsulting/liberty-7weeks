import { graphql } from 'gatsby';

export const query1 = graphql`
  fragment HowToFieldsFull on SanityHowToArticle {
    _type
    headline
    publishedAt(formatString: "MMMM D, YYYY")
    _createdAt(formatString: "MMMM D, YYYY")
    _updatedAt(formatString: "MMMM D, YYYY")
    skillLevel
    subheading
    time
    path
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
        localFile {
          childImageSharp {
            fluid(toFormat: JPG, jpegProgressive: true, jpegQuality: 70) {
              src
            }
          }
        }
      }
    }
    heroVideo {
      url
      youTubeCaption
      heroImage {
        alt
        asset {
          localFile {
            childImageSharp {
              fluid(
                toFormat: JPG
                jpegProgressive: true
                jpegQuality: 70
                maxHeight: 400
                maxWidth: 712
              ) {
                src
              }
            }
          }
        }
      }
    }
    _rawHowTobody(resolveReferences: { maxDepth: 10 })
    productList {
      buyNow
      smartProductID
      tagLine
      name
      slug {
        current
      }
      image {
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
      }
    }
    seo {
      metaDescription
      metaKeywords
      metaTitle
    }
    tags {
      name
      id
      tagCategory {
        name
        id
      }
    }
    toolList {
      name
      image {
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
    tags {
      name
    }
    author {
      name
      slug {
        current
      }
    }
    readnext {
      ... on SanityGalleryArticle {
        headline
        path
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
        path
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
        path
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
  fragment HowToFieldsTile on SanityHowToArticle {
    headline
    publishedAt(formatString: "MMMM D, YYYY")
    skillLevel
    subheading
    time
    path
    slug {
      current
    }
    id
    heroVideo {
      url
      youTubeCaption
      heroImage {
        alt
        asset {
          localFile {
            childImageSharp {
              fluid(
                toFormat: JPG
                jpegProgressive: true
                jpegQuality: 70
                maxHeight: 400
                maxWidth: 712
              ) {
                src
              }
            }
          }
        }
      }
    }
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
