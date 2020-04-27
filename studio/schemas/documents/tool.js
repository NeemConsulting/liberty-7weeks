export default {
  name: 'tool',
  type: 'document',
  title: 'Tool',
  fields: [
    {
      name: 'toolName',
      type: 'string',
      title: 'Tool Name',
      description: 'Add some tools',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Slug Me',
      options: {
        source: 'toolName',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
    },
  ],
  preview: {
    select: {
      title: 'toolName',
      media: 'image.mainImage',
    },

}
