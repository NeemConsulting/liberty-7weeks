import {GiCherish} from 'react-icons/gi'

export default {
  name: 'brand',
  title: 'Brand',
  icon: GiCherish,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Brand Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Brand Image',
      type: 'figure',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
