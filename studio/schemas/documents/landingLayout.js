// import {MdFlightLand} from 'react-icons/gi'

export default {
  name: 'landingLayout',
  type: 'document',
  // icon: MdFlightLand,
  title: 'Landing Layout',
  description: 'Full control to layout your landing pages',
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
          type: 'reference',
          to: [
            {type: 'articleSlider'},
            {type: 'productSlider'},
            {type: 'textBlock'},
            {type: 'imageBlock'},
            {type: 'videoBlock'}
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
