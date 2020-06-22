import React from 'react';
import { graphql } from 'gatsby';
import ProductShowcase from '../templates/ProductShowcase/';

const ProductShowcasePage = ({ data }) => {
  return <ProductShowcase data={data} />;
};

export default ProductShowcasePage;

export const query = graphql`
  query {
    howtoShampooArticles: allSanityHowToArticle(
      filter: { tags: { elemMatch: { name: { eq: "Shampoo" } } } }
    ) {
      nodes {
        ...HowToFieldsTile
      }
    }
    galleryShampooArticles: allSanityGalleryArticle(
      filter: { tags: { elemMatch: { name: { eq: "Shampoo" } } } }
    ) {
      nodes {
        ...GalleryFieldsTile
      }
    }
    featureShampooArticles: allSanityFeatureArticle(
      filter: { tags: { elemMatch: { name: { eq: "Shampoo" } } } }
    ) {
      nodes {
        ...FeatureFieldsTile
      }
    }
    seeAllShampoo: allSanityTag(limit: 6, filter: { name: { eq: "Shampoo" } }) {
      nodes {
        id
        name
      }
    }
    howtoHairSprayArticles: allSanityHowToArticle(
      filter: { tags: { elemMatch: { name: { eq: "Hair Spray" } } } }
    ) {
      nodes {
        ...HowToFieldsTile
      }
    }
    galleryHairSprayArticles: allSanityGalleryArticle(
      filter: { tags: { elemMatch: { name: { eq: "Hair Spray" } } } }
    ) {
      nodes {
        ...GalleryFieldsTile
      }
    }
    featureHairSprayArticles: allSanityFeatureArticle(
      filter: { tags: { elemMatch: { name: { eq: "Hair Spray" } } } }
    ) {
      nodes {
        ...FeatureFieldsTile
      }
    }
    seeAllHairSpray: allSanityTag(
      limit: 6
      filter: { name: { eq: "Hair Spray" } }
    ) {
      nodes {
        id
        name
      }
    }
    productShowcaseIntro: sanityTextBlock(
      name: { eq: "Product Showcase Intro" }
    ) {
      id
      name
      _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
      textBlockType {
        name
      }
    }
    productShowcaseTextBlock1: sanityTextBlock(
      name: { eq: "Product Showcase Text Block-1" }
    ) {
      id
      name
      _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
      textBlockType {
        name
      }
    }
    productShowcaseTextBlock2: sanityTextBlock(
      name: { eq: "Product Showcase Text Block-2" }
    ) {
      id
      name
      _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
      textBlockType {
        name
      }
    }
    imageBlock: allSanityImageBlock(
      filter: { imageBlockType: { name: { eq: "Image Block Type B" } } }
    ) {
      edges {
        node {
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
    tags: allSanityTag(limit: 6) {
      nodes {
        id
        tagCategory {
          id
          name
        }
        name
      }
    }
  }
`;
