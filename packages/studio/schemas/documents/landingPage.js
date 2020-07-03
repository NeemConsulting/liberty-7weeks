import {MdWeb} from 'react-icons/md'

export default {
  name: 'landingPage',
  title: 'Landing Layout',
  description: 'Full control to layout your landing pages',
  icon: MdWeb,
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Landing Page',
      description: 'Name your landing page - Used as internal identifier'
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
      description: 'Headline of section / landing Page'
    },
    {
      name: 'introduction',
      type: 'landingpagesPortableText',
      title: 'Introduction',
      description: 'Brief intro to this section / landing page'
    },
    {
      name: 'landingSections',
      type: 'array',
      title: 'Layout / Order your sections on landing page',
      description: 'Add/Order your page section layout',
      of: [
        {
          title: 'Add any sliders or blocks',
          type: 'reference',
          to: [
            {type: 'articleSlider'},
            {type: 'productSlider'},
            {type: 'textBlock'},
            {type: 'imageBlock'},
            {type: 'videoBlock'},
            {type: 'newsletterBlock'}
          ]
        }
      ]
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'May be used for friendly url',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'MdWeb'
    }
  }
}
