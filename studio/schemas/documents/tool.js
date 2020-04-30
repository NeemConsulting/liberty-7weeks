export default {
  name: 'tools',
  title: 'Tools',
  type: 'document',
  fields: [
    {
      name: 'toolName',
      title: 'Tool Name *',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'toolImage',
      title: 'Tool Image',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      title: 'toolName',
      media: 'toolImage'
    }
  }
}
