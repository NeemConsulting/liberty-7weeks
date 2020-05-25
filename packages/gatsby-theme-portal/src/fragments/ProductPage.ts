import { graphql } from 'gatsby';

export const query1 = graphql`
  fragment ProductFieldsFull on SanityProduct {
    buyNow
    brandName {
      brandName
    }
    _rawIngredients(resolveReferences: { maxDepth: 10 })
    _rawMarketingDescription(resolveReferences: { maxDepth: 10 })
    productImage {
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
    productName
    productTagLine
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
    brandName {
      brandName
    }
    productImage {
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
    productName
    slug {
      current
    }
  }
`;
