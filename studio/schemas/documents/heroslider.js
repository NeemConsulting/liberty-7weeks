export default {
  name: 'heroslider',
  type: 'document',
  title: 'Hero Slider',
  fields: [
    {
      name: 'heroslider',
      type: 'string',
      title: 'Hero xx Slider'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'heroslider',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'slider',
      type: 'array',
      of: [{type: 'mainImage'}],
      title: 'Slider'
    }
  ],
  preview: {
    select: {
      title: 'heroslider',
      media: 'image'
    }
  }
}
