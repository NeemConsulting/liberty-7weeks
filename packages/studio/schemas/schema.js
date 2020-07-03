// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import blogAuthor from './documents/blogAuthor'
import config from './documents/config'
import tool from './documents/tool'
import tag from './documents/tag'
import tagCategory from './documents/tagCategory'
import product from './documents/product'
import brand from './documents/brand'
import howToArticle from './documents/howToArticle'
import howToTemplate from './documents/howToTemplate'
import featureTemplate from './documents/featureTemplate'
import galleryTemplate from './documents/galleryTemplate'
import featureArticle from './documents/featureArticle'
import galleryArticle from './documents/galleryArticle'
import brandInfo from './documents/brandInfo'
import globalLabels from './documents/globalLabels'
import landingPage from './documents/landingPage'
import imageBlock from './documents/imageBlock'
import imageBlockType from './documents/imageBlockType'
import textBlock from './documents/textBlock'
import textBlockType from './documents/textBlockType'
import taxonomyBlock from './documents/taxonomyBlock'
import taxonomyBlockType from './documents/taxonomyBlockType'
import videoBlock from './documents/videoBlock'
import videoBlockType from './documents/videoBlockType'
import newsletterBlock from './documents/newsletterBlock'
import newsletterBlockType from './documents/newsletterBlockType'
import sliderType from './documents/sliderType'
import articleSlider from './documents/articleSlider'
import productSlider from './documents/productSlider'
import navBar from './documents/navBar'

// Object types
import navLink from './objects/navLink'
import navItem from './objects/navItem'
import figure from './objects/figure'
import imageGallery from './objects/imageGallery'
import howToPortableText from './objects/howToPortableText'
import articlePortableText from './objects/articlePortableText'
import textBlockPortableText from './objects/textBlockPortableText'
import step from './objects/step'
import seo from './objects/seo'
import productReference from './objects/productReference'
import youTube from './objects/youTube'
import bioPortableText from './objects/bioPortableText'
import authorBioPortableText from './objects/authorBioPortableText'
import landingpagesPortableText from './objects/landingpagesPortableText'

import post from './documents/post'
import siteSettings from './documents/siteSettings'
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import beforeAfterImage from './objects/beforeAfterImage'
import blogAuthorReference from './objects/blogAuthorReference'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.

    // Documents
    articleSlider,
    config,
    brand,
    brandInfo,
    globalLabels,
    tagCategory,
    featureArticle,
    galleryArticle,
    howToArticle,
    howToTemplate,
    featureTemplate,
    galleryTemplate,
    landingPage,
    product,
    productSlider,
    sliderType,
    imageBlockType,
    imageBlock,
    textBlockType,
    taxonomyBlock,
    taxonomyBlockType,
    videoBlock,
    videoBlockType,
    newsletterBlock,
    newsletterBlockType,
    tag,
    textBlock,
    tool,
    author,

    navLink,
    navItem,
    navBar,

    // Objects
    articlePortableText,
    blogAuthorReference,
    figure,
    howToPortableText,
    imageGallery,
    productReference,
    seo,
    step,
    authorBioPortableText,
    textBlockPortableText,
    landingpagesPortableText,
    youTube,
    beforeAfterImage,

    // Old Stuff to be deleted
    siteSettings,
    post,
    blogAuthor,
    mainImage,
    bodyPortableText,
    bioPortableText,
    excerptPortableText

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
