export default {
  name: 'newsletterBlockType',
  type: 'document',
  title: 'Newsletter Block Type',
  fields: [
    {
      name: 'newsletterBlockName',
      type: 'string',
      title: 'Newsletter Block Type'
    },
    {
      name: 'newsletterBlockDescription',
      type: 'string',
      title: 'Newsletter Block Description'
    }
  ],
  preview: {
    select: {
      title: 'newsletterBlockName',
      subtitle: 'newsletterBlockDescription'
    }
  }
}
