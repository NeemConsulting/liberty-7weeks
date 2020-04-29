export default {
  title: 'Tag',
  name: 'tag',
  type: 'document',
  fields: [
    {
      name: 'categoryName',
      title: 'Category *',
      type: 'reference',
      to: {
        type: 'category'
      },
      description: 'Select Category'
    },
    {
      name: 'tagName',
      type: 'string',
      title: 'Tag'
    }
  ],
  preview: {
    select: {
      title: 'tagName',
      subtitle: 'categoryName.categoryName'
    }
  },
  orderings: [
    {
      title: 'Tag Name',
      name: 'nameAZ',
      by: [{field: 'tagName', direction: 'asc'}]
    },
    {
      title: 'Category',
      name: 'categoryAZ',
      by: [{field: 'categoryName', direction: 'asc'}]
    }
  ]
}
