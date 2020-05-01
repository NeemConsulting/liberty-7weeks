import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import {MdPerson, MdDescription, MdLocalOffer} from 'react-icons/lib/md'
import IframePreview from '../previews/IframePreview'

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
  if (schemaType == 'post') {
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
      S.listItem()
        .title('Brand Information')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('brandInfo')
            .schemaType('brandInfo')
            .documentId('brandInfo')
        ),
      S.divider(),
      S.listItem()
        .title('Layout')
        .icon(MdDescription)
        .schemaType('landingLayout')
        .child(S.documentTypeList('landingLayout').title('Layouts')),
      S.divider(),
      S.listItem()
        .title('Article - Feature')
        .icon(MdDescription)
        .schemaType('featureArticle')
        .child(S.documentTypeList('featureArticle').title('Article - Feature')),
      S.listItem()
        .title('Article - Gallery')
        .icon(MdDescription)
        .schemaType('galleryArticle')
        .child(S.documentTypeList('galleryArticle').title('Article - Gallery')),
      S.listItem()
        .title('Article - How To')
        .icon(MdDescription)
        .schemaType('howToArticle')
        .child(S.documentTypeList('howToArticle').title('Article - How To')),
      S.listItem()
        .title('Text Block')
        .icon(MdDescription)
        .schemaType('textBlock')
        .child(S.documentTypeList('textBlock').title('Text Block')),
      S.listItem()
        .title('Brand')
        .icon(MdDescription)
        .schemaType('brand')
        .child(S.documentTypeList('brand').title('brand')),
      S.listItem()
        .title('Product')
        .icon(MdDescription)
        .schemaType('product')
        .child(S.documentTypeList('product').title('product')),
      S.listItem()
        .title('Tool')
        .icon(MdDescription)
        .schemaType('tool')
        .child(S.documentTypeList('tool').title('tools')),
      S.divider(),
      S.listItem()
        .title('Slider Type')
        .icon(MdDescription)
        .schemaType('sliderType')
        .child(S.documentTypeList('sliderType').title('Slider Type')),
      S.listItem()
        .title('Slider - Articles')
        .schemaType('articleSlider')
        .child(S.documentTypeList('articleSlider').title('Slider - Articles')),
      S.listItem()
        .title('Slider - products')
        .schemaType('productSlider')
        .child(S.documentTypeList('productSlider').title('Slider - Products')),
      S.divider(),
      S.listItem()
        .title('Breadcrumb')
        .icon(MdDescription)
        .schemaType('breadcrumb')
        .child(S.documentTypeList('breadcrumb').title('Breadcrumb')),
      S.listItem()
        .title('Tag Categories')
        .icon(MdLocalOffer)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Tag Categories')),
      S.listItem()
        .title('Tag')
        .icon(MdDescription)
        .schemaType('tag')
        .child(S.documentTypeList('tag').title('Tags')),
      S.listItem()
        .title('Section')
        .icon(MdDescription)
        .schemaType('section')
        .child(S.documentTypeList('section').title('Sections')),
      S.divider(),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      //
      //
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Blog posts')
        .icon(MdDescription)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            'brandInfo',
            'landingLayout',
            'featureArticle',
            'galleryArticle',
            'howToArticle',
            'textBlock',
            'brand',
            'breadcrumb',
            'product',
            'sliderType',
            'articleSlider',
            'productSlider',
            'tool',
            'section',
            'tag',
            'category',
            'author',
            'post',
            'siteSettings'
          ].includes(listItem.getId())
      )
    ])
