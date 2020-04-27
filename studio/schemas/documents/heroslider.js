xport default {
    name: 'heroslider',
    type: 'document',
    title: 'Tool',
    fields: [
      {
        name: 'heroslider',
        type: 'string',
        title: 'Hero Slider',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'heroslider',
          maxLength: 96,
        },
      },
      {
        name: 'slider',
        type: 'array',
        of: [{ type: 'mainImage' }],
        title: 'Slider',
      },
    ],
  }
  