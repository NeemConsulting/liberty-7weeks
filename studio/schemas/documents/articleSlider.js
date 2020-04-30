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
      name: 'slide',
      type: 'array',
      of: [{type: 'howToArticle'}, {type: 'featureArticle'}, {type: 'galleryArticle'}],
      title: 'Slide',
      description: 'Add any article, image will be taken from the hero image'
    }
  ]
}
// test
