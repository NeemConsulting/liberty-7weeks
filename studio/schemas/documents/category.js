import {FaTag} from 'react-icons/lib/fa'

export default {
  name: 'category',
  type: 'document',
  icon: FaTag,
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
      title: 'categoryName',
      media: 'FaTag'
    }
  }
}
