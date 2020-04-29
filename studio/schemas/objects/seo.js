export default {
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    {
      name: 'mettaitle',
      type: 'text',
      title: 'Title',
      rows: 2,
      description: 'META-TITLE'
    },

    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'META-KEYWORDS',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'metadescription',
      type: 'text',
      title: 'Description',
      rows: 2,
      description: 'META-DESCRIPTION'
    }
  ]
}
