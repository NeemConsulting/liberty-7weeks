export default {
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      title: 'Title',
      rows: 2,
      description: 'META-TITLE'
    },

    {
      name: 'metaKeywords',
      type: 'array',
      title: 'Keywords',
      description: 'META-KEYWORDS',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Description',
      rows: 2,
      description: 'META-DESCRIPTION'
    }
  ]
}
