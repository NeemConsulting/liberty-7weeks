import { graphql } from 'gatsby';

export const query = graphql`
  fragment LandingPageFieldsFull on SanityLandingPage {
    id
    name
    path
    slug {
      current
    }
    landingSections {
      ... on SanityArticleSlider {
        id
        name
        headline
        slides {
          ... on SanityFeatureArticle {
            _type
            id
            headline
            subheading
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
                localFile {
                  childImageSharp {
                    fluid(
                      toFormat: JPG
                      jpegProgressive: true
                      jpegQuality: 70
                    ) {
                      src
                    }
                  }
                }
              }
              alt
            }
            heroVideo {
              url
              youTubeCaption
            }
            path
            slug {
              current
            }
          }
          ... on SanityGalleryArticle {
            _type
            id
            headline
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
                localFile {
                  childImageSharp {
                    fluid(
                      toFormat: JPG
                      jpegProgressive: true
                      jpegQuality: 70
                    ) {
                      src
                    }
                  }
                }
              }
              alt
            }
            path
            slug {
              current
            }
          }
          ... on SanityHowToArticle {
            _type
            id
            headline
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
                localFile {
                  childImageSharp {
                    fluid(
                      toFormat: JPG
                      jpegProgressive: true
                      jpegQuality: 70
                    ) {
                      src
                    }
                  }
                }
              }
              alt
            }
            heroVideo {
              url
              youTubeCaption
            }
            path
            slug {
              current
            }
          }
        }
        slideType {
          description
          name
        }
      }
      ... on SanityImageBlock {
        id
        url
        name
        _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
      }
      ... on SanityNewsletterBlock {
        id
        name
        _rawBody(resolveReferences: { maxDepth: 10 })
      }
      ... on SanityProductSlider {
        id
        name
        headline
        slides {
          _type
          name
          image {
            asset {
              source {
                url
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
            alt
          }
          brand {
            name
          }
          path
          slug {
            current
          }
        }
        slideType {
          description
          name
        }
      }
      ... on SanityTextBlock {
        id
        name
        _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
        textBlockType {
          name
        }
      }
      ... on SanityVideoBlock {
        id
        name
        _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
        videoBlock {
          _type
          url
          youTubeCaption
        }
        _type
      }
      ... on SanityImageBlock {
        name
        image {
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
          alt
        }
        _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
        url
        imageBlockType {
          name
        }
      }
    }
  }
`;
