export default {
  name: 'category',
  type: 'document',
  title: 'Tag Category',
  fields: [
    {
      name: 'categoryName',
      type: 'string',
      title: 'Tag Category',
      description: 'Tag categories help group tags together'
    }
  ],
  preview: {
    select: {
      title: 'categoryName'
    }
  }
}
