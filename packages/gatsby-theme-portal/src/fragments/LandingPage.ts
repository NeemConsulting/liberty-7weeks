import { graphql } from 'gatsby';

export const query = graphql`
  fragment LandingPageFieldsFull on SanityLandingPage {
    id
    name
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
              }
              alt
            }
            heroVideo {
              url
              youTubeCaption
            }
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
              }
              alt
            }
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
              }
              alt
            }
            heroVideo {
              url
              youTubeCaption
            }
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
    }
  }
`;
