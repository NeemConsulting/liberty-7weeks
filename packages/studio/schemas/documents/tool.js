import {GiHairStrands} from 'react-icons/gi'

export default {
  name: 'tool',
  title: 'Tool',
  icon: GiHairStrands,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tool Name *',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Tool Image',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
