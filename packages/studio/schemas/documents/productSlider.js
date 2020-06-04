import {FaSlidersH} from 'react-icons/fa'

export default {
  name: 'productSlider',
  type: 'document',
  icon: FaSlidersH,
  title: 'Product Slider',
  description: 'Product slider for hero and tile user experiences ',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Slider',
      description: 'Name is used to identify the slider for page layout'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Headline will be displayed on website'
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
      name: 'slides',
      type: 'array',
      title: 'Slides',
      description: 'Add any product, image will be taken from the hero image',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}]
        }
      ]
    },
    {
      name: 'searchCtaLabel',
      type: 'string',
      title: 'Search CTA Label',
      description: 'For example: See All, or leave blank'
    },
    {
      name: 'searchTags',
      type: 'array',
      title: 'Search Tags',
      description: 'Add list of tags that will be searched, when CTA label is pressed',
      of: [
        {
          type: 'reference',
          to: {
            type: 'tag'
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slideType.name',
      media: 'FaSlidersH'
    }
  }
}
