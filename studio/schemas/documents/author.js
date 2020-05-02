export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'authorName',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'authorImage',
      type: 'figure',
      title: 'Image'
    },
    {
      name: 'bio',
      type: 'authorBioPortableText',
      title: 'Biography'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'authorName',
        maxLength: 96
      }
    }
  ],
  preview: {
    select: {
      title: 'authorName',
      subtitle: 'slug.current',
      media: 'authorImage'
    }
  }
}
