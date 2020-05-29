import { graphql } from 'gatsby';

export const query1 = graphql`
  fragment ProductFieldsFull on SanityProduct {
    buyNow
    brand {
      name
    }
    _rawIngredients(resolveReferences: { maxDepth: 10 })
    _rawMarketingDescription(resolveReferences: { maxDepth: 10 })
    image {
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
