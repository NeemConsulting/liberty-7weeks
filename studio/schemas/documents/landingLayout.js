import {MdWeb} from 'react-icons/md'

export default {
  name: 'landingLayout',
  title: 'Landing Layout',
  description: 'Full control to layout your landing pages',
  icon: MdWeb,
  type: 'document',
  fields: [
    {
      name: 'landingPage',
      type: 'string',
      title: 'Landing Page',
      description: 'Name your landing page - may be fixed list in the future'
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
    }
  ],
  preview: {
    select: {
      title: 'landingPage'
    }
  }
}
