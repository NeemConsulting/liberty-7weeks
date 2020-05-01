export default {
  name: 'writer',
  type: 'document',
  title: 'Writer',
  fields: [
    {
      name: 'writerName',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'writerImage',
      type: 'figure',
      title: 'Image'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biography'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'writerName',
        maxLength: 96
      }
    }
  ],
  preview: {
    select: {
      title: 'writerName',
      subtitle: 'slug.current',
      media: 'writerImage'
    }
  }
}
