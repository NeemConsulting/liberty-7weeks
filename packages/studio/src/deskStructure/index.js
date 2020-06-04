import S from '@sanity/desk-tool/structure-builder'

// import article from './src/structure/article'
import {
  MdSettings,
  MdPerson,
  MdDescription,
  MdVideocam,
  MdImage,
  MdTextFields,
  MdViewCompact,
  MdEmail
} from 'react-icons/md'
import {FaSitemap, FaTag, FaTags, FaBuffer, FaSlidersH, FaBoxes, FaGlobe} from 'react-icons/fa'
import {GiSpray, GiCherish, GiHairStrands, GiStopSign} from 'react-icons/gi'
// ran npm install react
// ran npm install font-awesome

import IframePreview from '../previews/IframePreview'
import article from './article'

// Web preview configuration
const remoteURL = 'https://sanity-gatsby-blog-web-3d35kyw2.netlify.app'
const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const {schemaType} = props
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({previewURL})
    ])
  }
  return S.document().views([S.view.form()])
}

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      S.divider(),
      article,
      S.listItem()
        .title('Product')
        .icon(GiSpray)
        .schemaType('product')
        .child(S.documentTypeList('product').title('Product')),

      S.listItem()
        .title('Brand')
        .icon(GiCherish)
        .schemaType('brand')
        .child(S.documentTypeList('brand').title('Brand')),
      S.listItem()
        .title('Tool')
        .icon(GiHairStrands)
        .schemaType('tool')
        .child(S.documentTypeList('tool').title('tools')),

      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Author')),

      S.divider(),

      S.listItem()
        .title('Manage Pages')
        .icon(MdViewCompact)
        .schemaType('landingPage')
        .child(S.documentTypeList('landingPage').title('Landing Pages')),
      S.listItem()
        .title('Manage Blocks')
        .icon(FaBuffer)
        .child(
          S.list()
            .title('Block Type')
            .items([
              S.listItem()
                .title('Slider - Articles')
                .icon(FaSlidersH)
                .schemaType('articleSlider')
                .child(S.documentTypeList('articleSlider').title('Slider for articles')),
              S.listItem()
                .title('Slider - Products')
                .icon(FaSlidersH)
                .schemaType('productSlider')
                .child(S.documentTypeList('productSlider').title('Slider for products')),
              S.divider(),
              S.listItem()
                .title('Text Block')
                .icon(MdTextFields)
                .schemaType('textBlock')
                .child(S.documentTypeList('textBlock').title('Text Block')),
              S.divider(),
              S.listItem()
                .title('Taxonomy Block')
                .icon(FaBoxes)
                .schemaType('taxonomyBlock')
                .child(S.documentTypeList('taxonomyBlock').title('Taxonomy Block')),
              S.divider(),
              S.listItem()
                .title('Image Block')
                .icon(MdImage)
                .schemaType('textBlock')
                .child(S.documentTypeList('imageBlock').title('Image Block')),
              S.divider(),
              S.listItem()
                .title('Video Block')
                .icon(MdVideocam)
                .schemaType('videoBlock')
                .child(S.documentTypeList('videoBlock').title('Video Block')),
              S.divider(),
              S.listItem()
                .title('Newsletter Block')
                .icon(MdEmail)
                .schemaType('newsletterBlock')
                .child(S.documentTypeList('newsletterBlock').title('Newsletter Block'))
            ])
        ),
      S.listItem()
        .title('Manage Tags')
        .icon(FaTags)
        .child(
          S.list()
            .title('Manage Tags')
            .items([
              S.listItem()
                .title('Tag Category')
                .icon(FaTag)
                .schemaType('tagCategory')
                .child(S.documentTypeList('tagCategory').title('Tag Categories')),
              S.listItem()
                .title('Tags')
                .icon(FaTags)
                .schemaType('tag')
                .child(S.documentTypeList('tag').title('Tags'))
            ])
        ),
      S.listItem()
        .title('Site Structure')
        .icon(FaSitemap)
        .child(
          S.list()
            .title('Structure')
            .items([
              S.listItem()
                .title('Navigation')
                .icon(FaSitemap)
                .schemaType('navBar')
                .child(S.documentTypeList('navBar').title('Navigation V2 - Improved'))
            ])
        ),
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Brand Information')
                .icon(MdSettings)
                .child(
                  S.editor()
                    .id('brandInfo')
                    .schemaType('brandInfo')
                    .documentId('brandInfo')
                ),
              S.listItem()
                .title('Configuration')
                .icon(MdSettings)
                .child(
                  S.editor()
                    .id('config')
                    .schemaType('config')
                    .documentId('config')
                ),
              S.listItem()
                .title('Global Labels')
                .icon(FaGlobe)
                .child(
                  S.editor()
                    .id('globalLabels')
                    .schemaType('globalLabels')
                    .documentId('globalLabels')
                ),
              S.listItem()
                .title('Feature Template')
                .icon(MdSettings)
                .child(
                  S.editor()
                    .id('featureTemplate')
                    .schemaType('featureTemplate')
                    .documentId('featureTemplate')
                ),
              S.listItem()
                .title('Gallery Template')
                .icon(MdSettings)
                .child(
                  S.editor()
                    .id('galleryTemplate')
                    .schemaType('galleryTemplate')
                    .documentId('galleryTemplate')
                ),
              S.listItem()
                .title('HowTo Template')
                .icon(MdSettings)
                .child(
                  S.editor()
                    .id('howToTemplate')
                    .schemaType('howToTemplate')
                    .documentId('howToTemplate')
                ),
              S.listItem()
                .title('AUTHORIZED USERS ONLY')
                .icon(GiStopSign)
                .child(
                  S.list()
                    .title('Block Type for different UI')
                    .items([
                      S.listItem()
                        .title('Slider Type')
                        .icon(FaSlidersH)
                        .schemaType('sliderType')
                        .child(S.documentTypeList('sliderType').title('Slider Type')),
                      S.listItem()
                        .title('Text Block Type')
                        .icon(MdTextFields)
                        .schemaType('textBlockType')
                        .child(S.documentTypeList('textBlockType').title('Text Block Type')),
                      S.listItem()
                        .title('Taxonomy Block Type')
                        .icon(FaBoxes)
                        .schemaType('taxonomyBlockType')
                        .child(
                          S.documentTypeList('taxonomyBlockType').title('Taxonomy Block Type')
                        ),
                      S.listItem()
                        .title('Image Block Type')
                        .icon(MdImage)
                        .schemaType('imageBlockType')
                        .child(S.documentTypeList('imageBlockType').title('Image Block Type')),
                      S.listItem()
                        .title('Video Block Type')
                        .icon(MdVideocam)
                        .schemaType('videoBlockType')
                        .child(S.documentTypeList('videoBlockType').title('Video Block Type')),
                      S.listItem()
                        .title('Newsletter Block Type')
                        .icon(MdEmail)
                        .schemaType('newsletterBlockType')
                        .child(
                          S.documentTypeList('newsletterBlockType').title('Newsletter Block Type')
                        )
                    ])
                )
            ])
        ),
      S.divider(),

      S.divider(),
      S.listItem()
        .title('Blog Posts')
        .icon(MdDescription)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Blog Author')
        .icon(MdPerson)
        .schemaType('blogAuthor')
        .child(S.documentTypeList('blogAuthor').title('Blog Authors')),
      S.listItem()
        .title('Blog Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            'brandInfo',
            'config',
            'landingLayout',
            'featureArticle',
            'galleryArticle',
            'howToArticle',
            'howToTemplate',
            'featureTemplate',
            'galleryTemplate',
            'globalLabels',
            'brand',
            'product',
            'sliderType',
            'articleSlider',
            'productSlider',
            'tool',
            'navigation',
            'navBar',
            'tag',
            'tagCategory',
            'author',
            'post',
            'writer',
            'blogAuthor',
            'siteSettings',
            'textBlock',
            'textBlockType',
            'taxonomyBlock',
            'taxonomyBlockType',
            'imageBlock',
            'imageBlockType',
            'videoBlock',
            'videoBlockType',
            'newsletterBlock',
            'newsletterBlockType',
            'beforeAfterImage'
          ].includes(listItem.getId())
      )
    ])
