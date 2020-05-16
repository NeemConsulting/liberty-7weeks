export default {
  name: 'section',
  type: 'document',
  title: 'Section',
  fields: [
    {
      name: 'name',
      title: 'Section Name *',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Section Image',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
