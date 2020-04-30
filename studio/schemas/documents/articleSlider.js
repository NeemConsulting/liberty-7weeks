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
      name: 'slideType',
      title: 'Slide Type',
      type: 'reference',
      to: {
        type: 'sliderType'
      },
      description: 'Select Slide Type'
    },
    {
      name: 'selectSection',
      title: 'Section',
      type: 'reference',
      to: {
        type: 'section'
      },
      description: 'Select Section'
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
  ],
  preview: {
    select: {
      title: 'sliderName',
      subtitle: 'sliderType',
      description: 'selectSection',
      media: 'selectSection.heroImage'
    }
  }
}
