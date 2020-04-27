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
      name: 'slider',
      type: 'array',
      of: [{type: 'mainImage'}],
      title: 'Slider'
    }
  ]
}
