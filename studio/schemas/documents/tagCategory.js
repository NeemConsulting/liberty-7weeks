import {FaTag} from 'react-icons/fa'

export default {
  name: 'tagCategory',
  type: 'document',
  icon: FaTag,
  title: 'Tag Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Tag Category',
      description: 'Tag categories help group tags together'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'FaTag'
    }
  }
}
