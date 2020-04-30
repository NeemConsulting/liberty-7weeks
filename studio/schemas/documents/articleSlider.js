import {GiNinjaHead} from 'react-icons/gi'

export default {
  name: 'articleSlider',
  type: 'document',
  icon: GiNinjaHead,
  title: 'Article Slider',
  description: 'Generic article slider for hero and tile user experiences ',
  fields: [
    {
      name: 'sliderName',
      type: 'string',
      title: 'Slider'
    },
    {
      name: 'sliderType',
      type: 'string',
      title: 'Slider Type'
    },
    {
      name: 'slides',
      type: 'array',
      title: 'Slides',
      description: 'Add any article, image will be taken from the hero image',
      of: [
        {
          type: 'reference',
          to: [{type: 'howToArticle'}, {type: 'featureArticle'}, {type: 'galleryArticle'}]
        }
      ]
    }
  ]
}
// test
