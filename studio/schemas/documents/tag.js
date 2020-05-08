import {FaTag} from 'react-icons/fa'

export default {
  title: 'Tag',
  name: 'tag',
  icon: FaTag,
  type: 'document',
  fields: [
    {
      name: 'categoryName',
      title: 'Category *',
      type: 'reference',
      to: {
        type: 'tagCategory'
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
      subtitle: 'categoryName.tagCategoryName',
      media: 'FaTag'
    }
  },
  orderings: [
    {
      title: 'Tag Name',
      name: 'nameAZ',
      by: [{field: 'tagName', direction: 'asc'}]
    },
    {
      title: 'Tag Category',
      name: 'categoryAZ',
      by: [
        {field: 'categoryName.tagCategoryName', direction: 'asc'},
        {field: 'tagName', direction: 'asc'}
      ]
    }
  ]
}
