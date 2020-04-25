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
      toolName: 'Tool Name',
      slug: 'slug',
      media: 'mainImage',
    },
    prepare({ toolName = 'No tools', slug = {}, media }) {
      return {
        toolName,
        slug,
        media,
      }
    },
  },
}
