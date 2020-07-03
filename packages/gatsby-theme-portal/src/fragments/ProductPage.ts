import { graphql } from 'gatsby';

export const query1 = graphql`
  fragment ProductFieldsFull on SanityProduct {
    buyNow
    learnMore
    brand {
      name
    }
    _rawIngredients(resolveReferences: { maxDepth: 10 })
    _rawMarketingDescription(resolveReferences: { maxDepth: 10 })
    image {
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
            fluid {
              src
            }
          }
        }
      }
    }
    name
    tagLine
    smartProductID
    slug {
      current
    }
    _rawUsageDetails(resolveReferences: { maxDepth: 10 })
  }
`;

export const query2 = graphql`
  fragment ProductFieldsTile on SanityProduct {
    id
    brand {
      name
    }
    image {
      alt
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
    name
    slug {
      current
    }
  }
`;
