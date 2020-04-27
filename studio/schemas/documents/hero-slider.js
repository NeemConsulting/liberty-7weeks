xport default {
    name: 'hero-slider',
    type: 'document',
    title: 'Tool',
    fields: [
      {
        name: 'hero-slider',
        type: 'string',
        title: 'Hero Slider',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'hero-slider',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        type: 'mainImage',
        title: 'Main image',
      },
    ],
  }
  