import {FaTag} from 'react-icons/fa'

export default {
  title: 'Tags',
  icon: FaTag,
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
  }
}
