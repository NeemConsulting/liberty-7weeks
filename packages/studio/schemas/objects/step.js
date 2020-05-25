import {FaTasks} from 'react-icons/fa'

export default {
  name: 'step',
  title: 'Step',
  icon: FaTasks,
  type: 'object',
  fields: [
    {
      name: 'instructionName',
      title: 'Instruction Name',
      description: `Instruction Title`,
      validation: Rule => Rule.required(),
      rows: 1,
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'directions',
      title: 'Directions',
      description: `Instruction Details`,
      validation: Rule => Rule.required(),
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'imageName',
      title: 'Image',
      type: 'figure',
      description: 'Instruction Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'stepNumber',
      title: 'Step Number (Override)',
      description:
        'Only use this if you want to override the sequetial order, otherwise leave blank',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'instructionName',
      subtitle: 'directions',
      media: 'imageName'
    }
  }
}
