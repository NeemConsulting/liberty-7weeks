import { graphql } from 'gatsby';

export const query = graphql`
  fragment LandingPageFieldsFull on SanityLandingLayout {
    id
    landingPage
    landingSections {
      ... on SanityArticleSlider {
        id
        sliderName
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
                fluid(maxWidth: 752, maxHeight: 422) {
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
                fluid(maxWidth: 752, maxHeight: 422) {
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
                fluid(maxWidth: 752, maxHeight: 422) {
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
          sliderDescription
          sliderName
        }
      }
      ... on SanityImageBlock {
        id
        url
        imageBlockName
        _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
      }
      ... on SanityNewsletterBlock {
        id
        newsletterBlockName
        _rawNewsletterBlockBody(resolveReferences: { maxDepth: 10 })
      }
      ... on SanityProductSlider {
        id
        sliderName
        headline
        slides {
          _type
          productName
          productImage {
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
          brandName {
            brandName
          }
          slug {
            current
          }
        }
        slideType {
          sliderDescription
          sliderName
        }
      }
      ... on SanityTextBlock {
        id
        textBlockName
        _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
      }
      ... on SanityVideoBlock {
        id
        videoBlockName
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
