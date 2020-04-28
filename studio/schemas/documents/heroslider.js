import {GiNinjaHead} from 'react-icons/gi'

export default {
  name: 'heroslider',
  type: 'document',
  icon: GiNinjaHead,
  title: 'Hero Slider',
  fields: [
    {
      name: 'heroslider',
      type: 'string',
      title: 'Hero xx Slider'
    },
    {
      name: 'slider',
      type: 'array',
      of: [{type: 'mainImage'}],
      title: 'Slider'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'heroslider',
        maxLength: 96
      }
    }
  ],
  preview: {
    select: {
      title: 'heroslider',
      subtitle: 'slider.0.caption',
      media: 'slider.0.asset'
    }
  }
}
// test
