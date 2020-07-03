import { graphql } from 'gatsby';

export const query = graphql`
  fragment LandingPageFieldsFull on SanityLandingPage {
    id
    name
    path
    slug {
      current
    }
    headline
    _rawIntroduction(resolveReferences: { maxDepth: 10 })
    landingSections {
      ... on SanityArticleSlider {
        id
        name
        headline
        searchCtaLabel
        searchTags {
          name
          tagCategory {
            name
          }
        }
        slides {
          ... on SanityFeatureArticle {
            _type
            id
            headline
            subheading
            heroImage {
              asset {
                url
                fluid(maxWidth: 752, maxHeight: 421) {
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
                fluid(maxWidth: 752, maxHeight: 421) {
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
                fluid(maxWidth: 752, maxHeight: 421) {
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
      ... on SanityNewsletterBlock {
        id
        name
        ctaLabel
        headline
        _rawBody(resolveReferences: { maxDepth: 10 })
        campaignID
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
        type {
          name
          description
        }
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
        id
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
            localFile {
              childImageSharp {
                fluid(
                  maxWidth: 380
                  toFormat: JPG
                  jpegProgressive: true
                  jpegQuality: 70
                  srcSetBreakpoints: [300, 400, 600, 800]
                ) {
                  src
                  srcSet
                }
              }
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
