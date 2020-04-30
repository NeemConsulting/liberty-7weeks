// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import post from './documents/post'
import siteSettings from './documents/siteSettings'
import tool from './documents/tool'
import articleSlider from './documents/articleSlider'
import sliderType from './documents/sliderType'
import tag from './documents/tag'
import product from './documents/product'
import productSlider from './documents/productSlider'
import category from './documents/category'
import brand from './documents/brand'
import howToArticle from './documents/howToArticle'
import featureArticle from './documents/featureArticle'
import galleryArticle from './documents/galleryArticle'
import section from './documents/section'
import brandInfo from './documents/brandInfo'
import landingLayout from './documents/landingLayout'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import figure from './objects/figure'
import imageGallery from './objects/imageGallery'
import howToPortableText from './objects/howToPortableText'
import articlePortableText from './objects/articlePortableText'
import step from './objects/step'
import seo from './objects/seo'
import productReference from './objects/productReference'

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
    brandInfo,
    howToArticle,
    featureArticle,
    galleryArticle,
    author,
    section,
    category,
    tag,
    brand,
    product,
    tool,
    articleSlider,
    productSlider,
    sliderType,
    landingLayout,
    // Objects
    figure,
    imageGallery,
    step,
    seo,
    authorReference,
    productReference,
    articlePortableText,
    howToPortableText,
    // Old Stuff to be deleted
    siteSettings,
    post,
    mainImage,
    bodyPortableText,
    bioPortableText,
    excerptPortableText

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
