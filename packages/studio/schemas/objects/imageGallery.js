export default {
  name: 'imageGallery',
  type: 'object',
  title: 'Image Gallery',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'picture',
      title: 'Add in a Sequence of Images',
      type: 'array',
      of: [
        {
          type: 'figure',
          options: {
            isHighlighted: true
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url'
    }
  }
}
