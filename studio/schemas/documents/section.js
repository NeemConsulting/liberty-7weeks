export default {
  name: 'section',
  type: 'document',
  title: 'Section',
  fields: [
    {
      name: 'sectionName',
      title: 'Section Name *',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroImage',
      title: 'Section Image',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      title: 'sectionName',
      media: 'heroImage'
    }
  }
}
