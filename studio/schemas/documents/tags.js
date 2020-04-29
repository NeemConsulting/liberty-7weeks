export default {
  title: 'Tags',
  name: 'tag',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Tag'
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category'
    },
    {
      name: 'sub_category',
      type: 'string',
      title: 'Sub Category'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category'
    }
  },
  orderings: [
    {
      title: 'Tag Name',
      name: 'nameAZ',
      by: [{field: 'name', direction: 'asc'}]
    },
    {
      title: 'Category',
      name: 'categoryAZ',
      by: [{field: 'category', direction: 'asc'}]
    }
  ]
}
