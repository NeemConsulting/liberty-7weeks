export default {
  name: 'imageBlockType',
  type: 'document',
  title: 'Image Block Type',
  fields: [
    {
      name: 'imageBlockName',
      type: 'string',
      title: 'Image Block Type'
    },
    {
      name: 'imageBlockDescription',
      type: 'string',
      title: 'Image Block Description'
    }
  ],
  preview: {
    select: {
      title: 'imageBlockName',
      subtitle: 'imageBlockDescription'
    }
  }
}
