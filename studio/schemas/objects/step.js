export default {
  name: 'step',
  title: 'Step',
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
      description: `Instruction Image`,
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'instructionName',
      subtitle: 'directions',
      media: 'imageName.image'
    }
  }
}
