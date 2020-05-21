import S from '@sanity/desk-tool/structure-builder'
  import { FaNewspaper} from 'react-icons/fa'
import AllSeoPreviews from '../previews/AllSeoPreviews';




  const getArticlePreviews = (type) =>
  S.documentTypeListItem(type).child(
    S.documentTypeList(type).child((docId) =>
      S.document()
        .id(docId)
        .schemaType(type)
        .views([
          S.view.form(),
          S.view
            .component(AllSeoPreviews)
            .title('SEO Preview')
            .id('seo-preview'),
        ])
    )
  );

  export default S.listItem()
  .title('Articles')
  .icon(FaNewspaper)
  .child(
    S.list()
      .title('Article Type')
      .items([
        getArticlePreviews('featureArticle').title('Feature'),
        getArticlePreviews('galleryArticle').title('Gallery'),
        getArticlePreviews('howToArticle').title('How To'),
      ])
  );

