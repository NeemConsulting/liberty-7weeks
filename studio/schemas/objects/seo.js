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
      validation: (Rule) =>
      Rule.max(88).error('Please keep the SEO description below 160 characters.'),
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
      validation: (Rule) =>
      Rule.max(160).error('Please keep the SEO description below 160 characters.'),
      description: 'META-DESCRIPTION'
    }
  ]
}
