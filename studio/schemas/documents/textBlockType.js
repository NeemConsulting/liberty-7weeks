export default {
  name: 'textBlockType',
  type: 'document',
  title: 'Text Block Type',
  fields: [
    {
      name: 'textBlockName',
      type: 'string',
      title: 'Text Block Type'
    },
    {
      name: 'textBlockDescription',
      type: 'string',
      title: 'Text Block Description'
    }
  ],
  preview: {
    select: {
      title: 'textBlockName',
      subtitle: 'textBlockDescription'
    }
  }
}
